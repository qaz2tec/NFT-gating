const express = require('express');
const {Web3} = require('web3');
const Abi = require("./ABI.json");
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());

const web3 = new Web3("https://snowy-wild-waterfall.ethereum-sepolia.discover.quiknode.pro/a8e725a2c265b609b1e0524e18b697b959422bad/");

const contractaddress = "0x67c58309f20d7DBf4571842cFa15D7b39980ede0";

const contract = new web3.eth.Contract(Abi,contractaddress);

// console.log(contract);

const nftbalance = async(account)=>{
    try{

        const nftbal = await contract.methods.balanceOf(account).call();
        // console.log(Number(nftbal));
        return{userNFTs:Number(nftbal)};
    }catch(error){
        console.error('error in fetching the data',error);
    }
}

// nftbalance().then(console.log);

// app.get("/",(req, res)=>{
//     res.send("Hi")
// })

app.post('/members',async(req,res)=>{
    try{ 
        const account = req.body.from;
        const numnft = await nftbalance(account);
        if(numnft.userNFTs>0){
            res.status(200).json({status:200,numnft});
        }else{
            res.status(400).json({status:400,message:"you have 0 Nfts"});
        }
    }catch(error){
        res.status(500).json({error: 'Internal server error'})
    }
})

// app.post("/webhook",async(req,res)=>{
// try{
// // const account = req.body[0].from;
// console.log("hey Dhruv");
// }catch(error){
//     console.error(error);
// }
// })


app.post('/webhook',async(req,res)=>{
    try{
      const account = req.body[0].from;
      const numNFTs = await nftbalance(account);
      io.emit('nftsUpdated',{userNFTs:numNFTs.userNFTs})
      res.status(200).json({status:200,message:"Webhook Triggered"})
      console.log(account);
    }catch(error){
      console.error(error)
    }
})

const Port = 3000;

const server = app.listen(Port,()=>{
    console.log(`Server is running at ${Port}`)
})

const io = socketIO(server);
io.on('connection',()=>{
  console.log("Connected")
})
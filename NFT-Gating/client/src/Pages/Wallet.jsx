import { useNavigate } from "react-router-dom";
const Wallet =()=>{

    const navigateto = useNavigate();
    const ConnectWallet = async()=>{
        try{
            if(window.ethereum){
                const account = await window.ethereum.request({method:'eth_requestAccounts'});
                console.log(account[0]); 
                navigateto("/home",{state:{address:account[0]}});
            }else{
                alert("Intall Metamask");
            }

        }catch(error){
            console.error(error);
        }
    }
return <>
<button onClick={ConnectWallet}>Connect Wallet</button>
</>
}
export default Wallet;
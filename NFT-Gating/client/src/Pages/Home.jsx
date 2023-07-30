import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
const Home =()=>{
    const location = useLocation();
    const navigateto = useNavigate();
    const revealmsg = async()=>{
        try {
            const account = location.state.address;
            // console.log(account);
            const res = await fetch(`http://localhost:3000/members`,{
                method:"POST",
                headers:{
                    "content-type" : "application/json"
                },
                body:JSON.stringify({from:account})
            })
            const data = await res.json();
            // console.log(data);
            if(data.status===200){
                navigateto("/members");
            }else{
                window.alert("You don't have any NFT")
            }
        } catch (error) {
            console.error(error);
        }
    }
    return <>
    <span className="beautiful-sentence">I have a secret message for holders of my NFT collection with <br></br>address 0xd618581402226c92b14c9f4870799b3000ac4c77</span>
        <br></br>
        <br></br>
    <button onClick={revealmsg}>Reveal Msg</button></>

}
export default Home;
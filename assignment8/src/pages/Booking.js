
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Booking(){
  const nav=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");

  function submit(){
    nav("/success",{state:{name,email,mobile,id:Math.floor(Math.random()*100000)}});
  }

  return(
    <div style={{padding:20}}>
      <h2>Enter Details</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)}/>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <input placeholder="Mobile" onChange={e=>setMobile(e.target.value)}/>
      <button className="btn" onClick={submit}>Submit</button>
    </div>
  );
}

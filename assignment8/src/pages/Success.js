
import {useLocation} from "react-router-dom";

export default function Success(){
  const {state}=useLocation();
  return(
    <div style={{padding:20}}>
      <h2>Booking Successful</h2>
      <p>Booking ID: {state.id}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );
}

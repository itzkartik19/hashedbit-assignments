
import {useParams,useNavigate} from "react-router-dom";
import movies from "../Data";

export default function Details(){
  const {id}=useParams();
  const nav=useNavigate();
  const m=movies.find(x=>x.id==id);
  return(
    <div style={{padding:20}}>
      <img src={m.image} width="300"/>
      <h2>{m.name}</h2>
      <p>{m.desc}</p>
      <button className="btn" onClick={()=>nav(`/booking/${m.id}`)}>Book Seat</button>
    </div>
  );
}

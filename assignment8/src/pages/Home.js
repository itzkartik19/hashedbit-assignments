
import movies from "../Data";
import {Link} from "react-router-dom";

export default function Home(){
  return(
    <div className="grid">
    {movies.map(m=>(
      <Link key={m.id} to={`/details/${m.id}`}>
        <div className="card">
          <img src={m.image}/>
          <h3>{m.name}</h3>
        </div>
      </Link>
    ))}
    </div>
  );
}

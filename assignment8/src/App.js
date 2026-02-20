
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Booking from "./pages/Booking";
import Success from "./pages/Success";

export default function App(){
  return(
    <BrowserRouter>
      <div className="header">MOVIE BOOKING</div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/booking/:id" element={<Booking/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
}

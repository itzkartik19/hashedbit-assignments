import React from "react";
import ReviewList from "./components/ReviewList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App(){
 return(
  <div className="container mt-4">

   <h1 className="mb-4">⭐ Product Review System</h1>

   <ReviewList/>

   <ToastContainer
     position="top-right"
     autoClose={3000}
     hideProgressBar={false}
     newestOnTop={true}
     closeOnClick
     pauseOnHover
     theme="colored"
   />

  </div>
 );
}
import { toast } from "react-toastify";
import React,{useState} from "react";
import axios from "axios";

export default function AddReviewForm({onAdded}){
 const [form,setForm]=useState({
   product_id:"",
   user_id:"",
   username:"",
   rating:"",
   review_text:""
 });

 const submit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:5000/api/reviews",form)
  .then(()=>{
    alert("Review Added");
    setForm({product_id:"",user_id:"",username:"",rating:"",review_text:""});
    onAdded();
  });
 };

 return(
  <form onSubmit={submit} className="row g-2">
    <input className="form-control" placeholder="Product ID"
      value={form.product_id}
      onChange={e=>setForm({...form,product_id:e.target.value})}/>

    <input className="form-control" placeholder="User ID"
      value={form.user_id}
      onChange={e=>setForm({...form,user_id:e.target.value})}/>

    <input className="form-control" placeholder="Username"
      value={form.username}
      onChange={e=>setForm({...form,username:e.target.value})}/>

    <input className="form-control" placeholder="Rating"
      value={form.rating}
      onChange={e=>setForm({...form,rating:e.target.value})}/>

    <input className="form-control" placeholder="Review"
      value={form.review_text}
      onChange={e=>setForm({...form,review_text:e.target.value})}/>

    <button className="btn btn-primary mt-2">Add Review</button>
  </form>
 );
}

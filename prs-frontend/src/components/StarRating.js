import React from "react";

export default function StarRating({ rating = 0 }) {

  return (

    <span style={{ color: "#ffc107", fontSize: "18px" }}>

      {[...Array(5)].map((_, index) => (

        <span key={index}>

          {index < rating ? "★" : "☆"}

        </span>

      ))}

    </span>

  );

}
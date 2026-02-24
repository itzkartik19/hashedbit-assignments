import React, { useEffect, useState } from "react";
import axios from "axios";
import AddReviewForm from "./AddReviewForm";
import { toast } from "react-toastify";

export default function ReviewList() {

  const [reviews, setReviews] = useState([]);

  // FETCH REVIEWS
  const fetchReviews = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/reviews"
      );

      setReviews(res.data);

    }
    catch (error) {

      toast.error("Failed to fetch reviews ❌");

      setReviews([]);

      console.error(error);

    }

  };


  useEffect(() => {

    fetchReviews();

  }, []);


  // CALCULATE AVERAGE RATING (Frontend requirement)
  const avg = reviews.length
    ? (
        reviews.reduce(
          (total, review) => total + review.rating,
          0
        ) / reviews.length
      ).toFixed(1)
    : 0;


  // DELETE REVIEW
  const deleteReview = async (id) => {

    if (!window.confirm("Delete this review?")) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/reviews/${id}`
      );

      toast.success("Review deleted successfully 🗑");

      fetchReviews();

    }
    catch (error) {

      toast.error("Delete failed ❌");

      console.error(error);

    }

  };


  // EDIT REVIEW
  const editReview = async (review) => {

    const newText = prompt(
      "Edit review:",
      review.review_text
    );

    if (!newText) return;

    try {

      await axios.put(
        `http://localhost:5000/api/reviews/${review.review_id}`,
        {
          ...review,
          review_text: newText
        }
      );

      toast.success("Review updated successfully ✏");

      fetchReviews();

    }
    catch (error) {

      toast.error("Update failed ❌");

      console.error(error);

    }

  };


  return (

    <div>

      {/* ADD REVIEW FORM */}
      <AddReviewForm onAdded={fetchReviews} />

      {/* AVERAGE RATING DISPLAY */}
      <h4 className="mt-3 mb-3">
        Average Rating ⭐ {avg}
      </h4>


      {/* REVIEW TABLE */}
      {reviews.length === 0
        ?
        <p>No reviews yet</p>
        :
        <table className="table table-bordered table-striped">

          <thead>

            <tr>

              <th>ID</th>

              <th>User</th>

              <th>Rating</th>

              <th>Review</th>

              <th>Actions</th>

            </tr>

          </thead>


          <tbody>

            {reviews.map((r) => (

              <tr key={r.review_id}>

                <td>{r.review_id}</td>

                <td>{r.username}</td>

                <td>⭐ {r.rating}</td>

                <td>{r.review_text}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editReview(r)}
                  >
                    Edit
                  </button>


                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteReview(r.review_id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      }

    </div>

  );

}
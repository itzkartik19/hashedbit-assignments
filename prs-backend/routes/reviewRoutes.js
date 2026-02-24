
const express = require("express");
const router = express.Router();
const controller = require("../controllers/reviewController");

router.get("/", controller.getReviews);
router.post("/", controller.addReview);
router.delete("/:id", controller.deleteReview);

module.exports = router;

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async(req, res) => {
    console.log("Creating review for listing:", req.params.id, "user:", req.user.username);
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    await newReview.save();
    console.log("Review created:", newReview._id);
    listing.reviews.push(newReview);

    await listing.save();
    console.log("Listing updated with review");
    req.flash("success", "New Review Created!");
    console.log("new review saved");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview = async(req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
}
import mongoose from "mongoose";
import { Express } from "express";

export const groomigData = new mongoose.Schema({
    name: {
        type: String,
      },
      photo: {
        type: String,
      },
      study: {
        type: String,
      },
      rating: {
        type: String,
      },
      numberOfReviews: {
        type: String,
      },
      distance: {
        type: String,
      },
      price: {
        type: String,
      },
      experience: {
        type: String,
      },
      avaiable: {
        type: String,
      },
})
const Grooming = mongoose.model("grooming data", groomigData);
export { Grooming };
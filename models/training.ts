import mongoose from "mongoose";
import { Express } from "express";

export const trainingData = new mongoose.Schema({
    name: {
        type: String,
      },
      photo: {
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

const Training = mongoose.model("training data", trainingData);
export { Training };
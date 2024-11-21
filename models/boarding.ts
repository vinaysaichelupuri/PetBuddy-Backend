import mongoose from "mongoose";
import { Express } from "express";
const boardingData = new mongoose.Schema({
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
const Boarding = mongoose.model('boarding data',boardingData)
export {Boarding}
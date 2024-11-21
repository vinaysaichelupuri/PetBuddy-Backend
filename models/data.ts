import mongoose from "mongoose";
import { Express } from "express";
export const dataSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  userPhoto: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  pet: [
    {
      petName: {
        type: String,
      },
      gender: {
        type: String,
      },
      emergencyNumber: {
        type: Number,
      },
      breadName: {
        type: String,
      },
      petPhoto: {
        type: String,
      },
      age: {
        type: String,
      },
      weight: {
        type: String,
      },
      height: {
        type: String,
      },
      color: {
        type: String,
      },
      remarks: {
        type: String,
      },
      Remainders: [
        {
          type: {
            type: String,
          },
          remainderName: {
            type: String,
          },
          startTime: {
            type: String,
          },
          endTime: {
            type: String,
          },
        },
      ],
      activity: [
        {
          activityName: {
            type: String,
          },
          startTime: {
            type: String,
          },
          endTime: {
            type: String,
          },
        },
      ],
      gallery: [
        {
          path: {
            type: String,
          },
        },
      ],
    },
  ],
});

const data = mongoose.model("data", dataSchema);
export { data };

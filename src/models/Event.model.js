import { Schema, model } from "mongoose";
import mongoose from 'mongoose';

const EventSchema = new Schema(
  {
    eventTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true, versionKey: false }
);

const Event = model("events", EventSchema);

export { Event, EventSchema };
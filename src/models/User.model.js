import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

  },
  { timestamps: true, versionKey: false }
);

const User = model("users", UserSchema);

export { User, UserSchema };
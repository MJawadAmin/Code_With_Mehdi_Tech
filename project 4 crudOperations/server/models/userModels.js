import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  symptoms: {  // Corrected typo here
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const userModel = mongoose.model("users", userSchema);

export default userModel;

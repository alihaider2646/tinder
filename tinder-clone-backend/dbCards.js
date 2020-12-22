import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  imgUrl: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
});

export default mongoose.model("Cards", cardSchema);

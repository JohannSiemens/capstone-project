import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  _id: Schema.Types.ObjectId,
  workoutID: { type: ObjectId, required: true },
  name: { type: String, required: true },
  type: { type: String },
  muscle: { type: String },
  equipment: { type: String },
  difficulty: { type: String },
  instructions: { type: String },
  sets: { type: Array, required: true },
});

const Exercise =
  mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema);

export default Exercise;

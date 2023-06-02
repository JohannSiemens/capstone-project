import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  _id: Schema.Types.ObjectId,
  workoutID: { type: ObjectId, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  muscle: { type: String, required: true },
  equipment: { type: String, required: true },
  difficulty: { type: String, required: true },
  instructions: { type: String, required: true },
  sets: { type: Array, required: true },
});

const Exercise =
  mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema);

export default Exercise;

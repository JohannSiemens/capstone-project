import mongoose from "mongoose";

const { Schema } = mongoose;

const workoutSchema = new Schema({
  title: { type: String, required: true },
  exercises: { type: Array, required: true },
});

const Workout =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default Workout;

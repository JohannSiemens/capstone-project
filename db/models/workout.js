import mongoose from "mongoose";

const { Schema } = mongoose;

const workoutSchema = new Schema({
  title: { type: String, required: true },
  exercises: { type: [Schema.Types.ObjectId], ref: "Exercise" },
});

const Workout =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default Workout;

import dbConnect from "@/db/connect";
import Exercise from "@/db/models/exercise";
import Workout from "@/db/models/workout";
import mongoose from "mongoose";

export default async function fetcher(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const exercises = await Exercise.find();
    response.status(200).json(exercises);
    return;
  }

  if (request.method === "POST") {
    const exercisesData = request.body;
    const workoutID = request.headers.workoutid;
    console.log("Headers: ", request.headers);
    console.log("WorkoutID: ", workoutID);

    const newExercise = {
      _id: new mongoose.Types.ObjectId(),
      name: exercisesData.name,
      type: exercisesData.type,
      muscle: exercisesData.muscle,
      equipment: exercisesData.equipment,
      difficulty: exercisesData.difficulty,
      instructions: exercisesData.instructions,
      sets: [],
    };

    await Exercise.create(newExercise);
    await Workout.findByIdAndUpdate(workoutID, {
      $push: { exercises: newExercise._id },
    });

    response.status(200).json({ status: "Exercise added!" });
    return;
  }

  response.status(501).json({ status: "Method not implemented." });
  return;
}

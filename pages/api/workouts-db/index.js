import dbConnect from "@/db/connect";
import Workout from "@/db/models/workout";

export default async function fetcher(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const workouts = await Workout.find();
    response.status(200).json(workouts);
    return;
  }

  if (request.method === "POST") {
    const workoutData = request.body;

    const newWorkout = {
      title: workoutData,
      exercises: [],
    };

    await Workout.create(newWorkout);

    response.status(200).json({ status: "Workout added!" });
    return;
  }

  response.status(501).json({ status: "Method not implemented." });
  return;
}

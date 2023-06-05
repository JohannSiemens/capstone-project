import dbConnect from "@/db/connect";
import Workout from "@/db/models/workout";
import Exercise from "@/db/models/exercise";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const workout = await Workout.findById(id).populate("exercises");

    if (!workout) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(workout);
    return;
  }
  if (request.method === "DELETE") {
    await Exercise.deleteMany({ workoutID: id });
    await Workout.findByIdAndDelete(id);

    response
      .status(200)
      .json({ status: "Exercise with the id " + id + " deleted" });
    return;
  }
  if (request.method === "PUT") {
    const title = request.body;

    await Workout.findByIdAndUpdate(id, { title: title });

    response
      .status(200)
      .json({ status: "Title for workout with id " + id + " changed" });
    return;
  }

  response.status(501).json({ status: "Method not implemented." });
  return;
}

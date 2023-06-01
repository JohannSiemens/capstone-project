import dbConnect from "@/db/connect";
import Workout from "@/db/models/workout";

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
    await Workout.findByIdAndDelete(id);

    response
      .status(200)
      .json({ status: "Exercise with the id " + id + " deleted" });
    return;
  }

  response.status(501).json({ status: "Method not implemented." });
  return;
}

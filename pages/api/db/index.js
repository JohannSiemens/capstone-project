import dbConnect from "../../../db/connect";
import Exercise from "@/db/models/exercise";

export default async function fetcher(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const exercises = await Exercise.find();
    response.status(200).json(exercises);
    return;
  }

  if (request.method === "POST") {
    const exerciseData = request.body;
    console.log(exerciseData);

    const newExercise = {
      name: exerciseData.name,
      type: exerciseData.type,
      muscle: exerciseData.muslce,
      equipment: exerciseData.equipment,
      difficulty: exerciseData.difficulty,
      instructions: exerciseData.instructions,
    };

    await Exercise.create(newExercise);

    response.status(200).json({ status: "Exercise added!" });
    return;
  }

  response.status(501).json({ status: "Method not implemented." });
}

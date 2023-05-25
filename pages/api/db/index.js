import dbConnect from "@/db/connect";
import Exercise from "@/db/models/exercise";

export default async function fetcher(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const exercises = await Exercise.find();
    response.status(200).json(exercises);
    return;
  }

  if (request.method === "POST") {
    const exercisesData = request.body;

    const newExercise = {
      name: exercisesData.name,
      type: exercisesData.type,
      muscle: exercisesData.muscle,
      equipment: exercisesData.equipment,
      difficulty: exercisesData.difficulty,
      instructions: exercisesData.instructions,
    };

    await Exercise.create(newExercise);

    response.status(200).json({ status: "Exercise added!" });
    return;
  }

  response.status(501).json({ status: "Method not implemented." });
}

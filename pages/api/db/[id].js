import dbConnect from "@/db/connect";
import Exercise from "@/db/models/exercise";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const exercise = await Exercise.findById(id);

    if (!exercise) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(exercise);
    return;
  }

  if (request.method === "PUT") {
    const headers = request.headers;
    const setsData = request.body;
    console.log(headers);
    if (request.headers.deleteset) {
      await Exercise.findByIdAndUpdate(id, {
        $pull: { sets: { id: setsData } },
      });
    } else {
      await Exercise.findByIdAndUpdate(id, { $push: { sets: setsData } });
    }

    response
      .status(200)
      .json({ status: "Sets for exercise with id " + id + " changed" });
    return;
  }

  if (request.method === "DELETE") {
    await Exercise.findByIdAndDelete(id);

    response
      .status(200)
      .json({ status: "Exercise with the id " + id + " deleted" });
    return;
  }

  response.status(501).json({ status: "Method not implemented." });
  return;
}

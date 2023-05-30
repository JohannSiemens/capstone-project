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
    const setsData = request.body;

    if (request.headers.deleteset) {
      await Exercise.findByIdAndUpdate(id, {
        $pull: { sets: { id: setsData } },
      });
    } else if (request.headers.editset) {
      const setID = setsData.setID;
      console.log(setID);
      const repetitions = setsData.repetitions;
      console.log("Repetitions: ", repetitions);
      await Exercise.findOneAndUpdate(
        { _id: id, "sets.id": setID },
        { $set: { "sets.$.repetitions": repetitions } }
      );
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

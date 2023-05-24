const key = process.env.API_Key;

export default async function fetcher(request, response) {
  const { exercise } = request.query;
  if (request.method === "GET") {
    console.log("Exercise: ", exercise);
    const data = await fetch(
      `https://api.api-ninjas.com/v1/exercises?name=${exercise}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": key,
        },
      }
    );
    if (!data) {
      return response.status(404).json({ status: "Not Found" });
    }
    const dataJSON = await data.json();
    return response.status(200).json(dataJSON);
  }
  return response.status(501).json({ status: "Method not implemented." });
}

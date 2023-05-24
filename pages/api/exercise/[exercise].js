const key = process.env.API_Key;

export default async function fetcher(request, response) {
  const { exercise } = request.query;
  if (request.method === "GET") {
    console.log("Exercise: ", exercise);
    const responseData = await fetch(
      `https://api.api-ninjas.com/v1/exercises?name=${exercise}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": key,
        },
      }
    );
    if (responseData.ok) {
      const data = await responseData.json();
      return response.status(200).json(data);
    } else if (!responseData) {
      return response.status(404).json({ status: "Not Found" });
    } else {
      return response.status(500).json(responseData);
    }
  }
  return response.status(501).json({ status: "Method not implemented." });
}

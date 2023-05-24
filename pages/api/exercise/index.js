export default async function fetcher() {
  if (request.method === "GET") {
    const data = fetch(
      `https://api.api-ninjas.com/v1/exercises?name=${exercise}`
    );
    response.status(200).json(jokes);
    return;
  }
  response.status(501).json({ status: "Method not implemented." });
}

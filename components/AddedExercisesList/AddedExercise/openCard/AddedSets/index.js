import useSWR from "swr";

export default function AddedSets({ id }) {
  const { data, isLoading, error, mutate } = useSWR(`/api/db/${id}`);

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  async function deleteSet(id, setID) {
    const response = await fetch(`/api/db/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        deleteSet: true,
      },
      body: JSON.stringify(setID),
    });

    if (response.ok) {
      mutate();
    } else {
      console.error(`Error Status: ${response.status}`);
      console.error(`Error: ${error}`);
    }
  }

  return (
    data.sets.length > 0 && (
      <ul>
        {data.sets.map((set) => (
          <li key={set.id}>
            Set {set.set} - Repetitions: {set.repetitions}
            <button onClick={() => deleteSet(data._id, set.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )
  );
}

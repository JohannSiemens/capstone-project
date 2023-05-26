import useSWR from "swr";

export default function AddedSets({ id }) {
  const { data, isLoading, error } = useSWR(`/api/db/${id}`);

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  return (
    data.sets.length > 0 && (
      <ul>
        {data.sets.map((set) => (
          <li key={set.id}>
            Set {set.set} - Repetitions: {set.repetitions}
          </li>
        ))}
      </ul>
    )
  );
}

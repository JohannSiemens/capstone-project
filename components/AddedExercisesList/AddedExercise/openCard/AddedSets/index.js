import useSWR from "swr";

export default function AddedSets({ id }) {
  const { data, isLoading } = useSWR(`/api/db/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  //setCurrentSet(data.sets.length + 1);

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

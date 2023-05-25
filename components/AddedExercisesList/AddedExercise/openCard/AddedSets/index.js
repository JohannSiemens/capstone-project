import useSWR from "swr";

export default function AddedSets({ addedSet, exerciseID }) {
  const { data, isLoading } = useSWR(`/api/db/${exerciseID}`);
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    data.length > 0 && (
      <ul>
        {data.map((set) => (
          <li key={set._id}>
            Set {set.set} - Repetitions: {set.repetitions}
          </li>
        ))}
      </ul>
    )
  );
}

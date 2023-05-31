import useSWR from "swr";

export default function WorkoutsList() {
  const { data, isLoading, error } = useSWR("/api/workouts-db");

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((workout) => (
        <li key={workout._id}>
          <button>{workout.title}</button>
        </li>
      ))}
    </ul>
  );
}

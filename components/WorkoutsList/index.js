import useSWR from "swr";
import Link from "next/link";

export default function WorkoutsList() {
  const { data, isLoading, error } = useSWR("/api/workouts-db");

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((workout) => (
        <li key={workout._id}>
          <Link href={`/workout/${workout._id}`}>{workout.title}</Link>
        </li>
      ))}
    </ul>
  );
}

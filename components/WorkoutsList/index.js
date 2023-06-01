import useSWR from "swr";
import Link from "next/link";

export default function WorkoutsList() {
  const { data, isLoading, error, mutate } = useSWR("/api/workouts-db");

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  async function deleteWorkout(id) {
    const response = await fetch(`/api/workouts-db/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      mutate();
    } else {
      console.error(`Error Status: ${response.status}`);
      console.error(`Error: ${error}`);
    }
  }

  return (
    <ul>
      {data.map((workout) => (
        <li key={workout._id}>
          <Link href={`/workout/${workout._id}`}>{workout.title}</Link>
          <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

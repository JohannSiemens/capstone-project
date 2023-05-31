import AddedExercise from "./AddedExercise";
import useSWR from "swr";

export default function AddedExercisesList({ exercises }) {
  const { data, isLoading, error } = useSWR("/api/exercises-db");
  console.log(exercises);

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((exercise) => (
        <AddedExercise exercise={exercise} key={exercise._id} />
      ))}
    </ul>
  );
}

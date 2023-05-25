import AddedExercise from "./AddedExercise";
import useSWR from "swr";

export default function AddedExercisesList() {
  const { data, isLoading } = useSWR("/api/db");

  if (isLoading) {
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

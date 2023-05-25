import AddedExercise from "./AddedExercise";
import useSWR from "swr";

export default function AddedExercisesList() {
  const { data, isLoading } = useSWR("/api/db");

  return (
    <ul>
      {data.map((exercise) => (
        <AddedExercise exercise={exercise} key={exercise.id} />
      ))}
    </ul>
  );
}

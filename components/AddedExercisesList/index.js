import AddedExercise from "./AddedExercise";
import useSWR from "swr";

export default function AddedExercisesList({ workoutID }) {
  const { data, isLoading, isValidating, error } = useSWR(
    `/api/workouts-db/${workoutID}`
  );
  console.log("Workout Data: ", data);

  if (isLoading || isValidating) {
    <p>...loading</p>;
  } else if (error) {
    <p>An error occured!</p>;
    console.error(error);
  }
  if (!data) {
    return;
  }
  console.log(data);
  return (
    <ul>
      {data.exercises.map((exercise) => (
        <AddedExercise exercise={exercise} key={exercise._id} />
      ))}
    </ul>
  );
}

import AddedExercise from "./AddedExercise";
import useSWR from "swr";

export default function AddedExercisesList({ workoutID }) {
  const { data, isLoading, isValidating, error } = useSWR(
    `/api/workouts-db/${workoutID}`
  );
  console.log("WorkoutID: ", workoutID);

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
        <AddedExercise
          exercise={exercise}
          key={exercise._id}
          workoutID={workoutID}
        />
      ))}
    </ul>
  );
}

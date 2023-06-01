import AddedExercise from "./AddedExercise";
import useSWR from "swr";

export default function AddedExercisesList({ workoutID }) {
  const { data, isLoading, isValidating, error } = useSWR(
    `/api/workouts-db/${workoutID}`
  );

  if (isLoading || isValidating) {
    return <p>...loading</p>;
  } else if (error) {
    return <p>An error occured!{console.error(error)}</p>;
  }
  if (!data) {
    return null;
  }

  return (
    data.exercises.length > 0 && (
      <ul>
        {data.exercises.map((exercise) => (
          <AddedExercise
            exercise={exercise}
            key={exercise._id}
            workoutID={workoutID}
          />
        ))}
      </ul>
    )
  );
}

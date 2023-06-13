import AddedExercise from "./AddedExercise";
import useSWR from "swr";
import Loader from "../Loader";
import List from "../List";

export default function AddedExercisesList({ workoutID }) {
  const { data, isLoading, isValidating, error } = useSWR(
    `/api/workouts-db/${workoutID}`
  );

  if (isLoading || isValidating) {
    return <Loader />;
  } else if (error) {
    return <p>An error occured!{console.error(error)}</p>;
  }
  if (!data) {
    return null;
  }

  return (
    data.exercises.length > 0 && (
      <List>
        {data.exercises.map((exercise) => (
          <AddedExercise
            exercise={exercise}
            key={exercise._id}
            workoutID={workoutID}
          />
        ))}
      </List>
    )
  );
}

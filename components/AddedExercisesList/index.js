import AddedExercise from "./AddedExercise";
import useSWR from "swr";

export default function AddedExercisesList() {
  const { data, isLoading, isValidating, error } = useSWR(`/api/exercises-db`);

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
      {data.map((exercise) => (
        <AddedExercise exercise={exercise} key={exercise._id} />
      ))}
    </ul>
  );
}

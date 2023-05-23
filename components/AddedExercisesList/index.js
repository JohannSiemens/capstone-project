import AddedExercise from "./AddedExercise";

export default function AddedExercisesList({ addedExercise }) {
  return (
    <ul>
      {addedExercise.map((exercise) => (
        <AddedExercise exercise={exercise} key={exercise.id} />
      ))}
    </ul>
  );
}

export default function AddedExercises({ addedExercise }) {
  return (
    <ul>
      {addedExercise.map((exercise) => (
        <li key={exercise.key}>{exercise.name}</li>
      ))}
    </ul>
  );
}

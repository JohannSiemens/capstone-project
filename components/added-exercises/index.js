export default function AddedExercises({ addedExercise }) {
  console.log("Added Exercise: ", addedExercise);
  return (
    <ul>
      {addedExercise.map((exercise) => (
        <li key={exercise}>{exercise}</li>
      ))}
    </ul>
  );
}

import { v4 as uuidv4 } from "uuid";

export default function AddedExercises({ addedExercise }) {
  console.log("Added Exercise: ", addedExercise);
  return (
    <ul>
      {addedExercise.map((exercise) => (
        <li key={uuidv4()}>{exercise}</li>
      ))}
    </ul>
  );
}

import { v4 as uuidv4 } from "uuid";

export default function ExerciseResults({
  exerciseResult,
  setAddedExercise,
  addedExercise,
}) {
  function addExercise(exercise) {
    const key = uuidv4();
    setAddedExercise([...addedExercise, { ...exercise, key: key }]);
  }

  return (
    <ul>
      {exerciseResult.map((exercise) => (
        <li key={exercise.id}>
          {exercise.name}
          <button onClick={() => addExercise(exercise)}>Add</button>
        </li>
      ))}
    </ul>
  );
}

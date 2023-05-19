export default function ExerciseResults({
  exerciseResult,
  setAddedExercise,
  addedExercise,
}) {
  function addExercise(exercise) {
    setAddedExercise([...addedExercise, exercise]);
  }

  return (
    <ul>
      {exerciseResult.map((exercise) => (
        <li key={exercise.name + exercise.type}>
          {exercise.name}
          <button onClick={() => addExercise(exercise.name)}>Add</button>
        </li>
      ))}
    </ul>
  );
}

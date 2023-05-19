import { testExercises } from "@/test_data";

export default function HomePage({
  exerciseInput,
  setExerciseInput,
  exerciseResult,
  setExerciseResult,
  setAddedExercise,
  addedExercise,
}) {
  return (
    <div>
      <h1>My Workout</h1>
      <ExerciseSearchForm
        exerciseResult={exerciseResult}
        setExerciseInput={setExerciseInput}
        setExerciseResult={setExerciseResult}
      />
      <ExerciseResults
        exerciseResult={exerciseResult}
        setAddedExercise={setAddedExercise}
        addedExercise={addedExercise}
      />
      <AddedExercises addedExercise={addedExercise} />
    </div>
  );
}

function ExerciseSearchForm({
  setExerciseInput,
  setExerciseResult,
  exerciseResult,
}) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const exerciseInput = event.target.elements.exercise_search.value;
    setExerciseInput(exerciseInput);
    const testResult = testExercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(exerciseInput.toLowerCase())
    );
    setExerciseResult(testResult);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="exercise-search">
        Exercise: <input type="text" name="exercise_search" required></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

function ExerciseResults({ exerciseResult, setAddedExercise, addedExercise }) {
  function addExercise(exercise) {
    setAddedExercise([...addedExercise, exercise]);
  }

  return (
    <ul>
      {exerciseResult.map((exercise) => (
        <li key={exercise.name}>
          {exercise.name}
          <button onClick={() => addExercise(exercise.name)}>Add</button>
        </li>
      ))}
    </ul>
  );
}

function AddedExercises({ addedExercise }) {
  console.log("Added Exercise: ", addedExercise);
  return (
    <ul>
      Test
      {addedExercise.map((exercise) => (
        <li key={exercise}>{exercise}</li>
      ))}
    </ul>
  );
}

import { testExercises } from "@/test_data";

export default function HomePage({
  exerciseInput,
  setExerciseInput,
  exerciseResult,
  setExerciseResult,
}) {
  return (
    <div>
      <h1>My Workout</h1>
      <ExerciseSearchForm
        exerciseResult={exerciseResult}
        setExerciseInput={setExerciseInput}
        setExerciseResult={setExerciseResult}
      />
      <ExerciseResults exerciseResult={exerciseResult} />
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
      exercise.name.includes(exerciseInput)
    );
    setExerciseResult(testResult);
    console.log(exerciseResult);
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

function ExerciseResults({ exerciseResult }) {
  return (
    <ul>
      {exerciseResult.map((exercise) => (
        <li key={exercise.name + exercise.type}>{exercise.name}</li>
      ))}
    </ul>
  );
}

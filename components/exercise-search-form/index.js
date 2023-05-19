import { testExercises } from "@/test_data";

export default function ExerciseSearchForm({
  setExerciseInput,
  setExerciseResult,
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
        Exercise:{" "}
        <input
          type="text"
          name="exercise_search"
          pattern="[A-Za-z]{3,20}"
          required
        ></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

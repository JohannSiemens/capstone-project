import useSWR from "swr";

export default function ExerciseSearchForm({
  setExerciseInput,
  exerciseInput,
  setExerciseResult,
}) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const exerciseInput = event.target.elements.exercise_search.value;
    setExerciseInput(exerciseInput);
    const response = await fetch(`/api/exercise/${exerciseInput}`);
    const responseData = await response.json();
    setExerciseResult(responseData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exercise:
        <input
          type="text"
          name="exercise_search"
          id="exercise_search"
          pattern="[A-Za-z]{3,20}"
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

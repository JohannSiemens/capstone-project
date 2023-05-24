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

    const response = await fetch("/api/exercise/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exerciseInput),
    });

    response.length === 0
      ? alert("No exercise found")
      : setExerciseResult(response);
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

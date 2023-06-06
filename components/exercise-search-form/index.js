import { useState } from "react";
import { StyledLoader } from "@/styles";

export default function ExerciseSearchForm({ setExerciseResult }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const exercise = event.target.elements.exercise_search.value;
    const response = await fetch(`/api/exercise-fetch/${exercise}`);
    const responseData = await response.json();
    responseData.length === 0
      ? alert("No exercises found")
      : setExerciseResult(responseData);
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <StyledLoader />
      ) : (
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
      )}
    </>
  );
}

import useSWR from "swr";
import { StyledButton } from "@/styles";

export default function NewWorkoutForm() {
  const { mutate } = useSWR("/api/workouts-db");

  async function createWorkout(event) {
    event.preventDefault();
    const workout = event.target.elements.new_workout.value;
    const response = await fetch("/api/workouts-db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workout),
    });
    if (response.ok) {
      mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <form onSubmit={createWorkout}>
      <label>
        Title:
        <input
          type="text"
          name="new_workout"
          id="new_workout"
          pattern="[A-Za-z]{1,20}"
          required
        ></input>
      </label>
      <StyledButton type="submit">Create</StyledButton>
    </form>
  );
}

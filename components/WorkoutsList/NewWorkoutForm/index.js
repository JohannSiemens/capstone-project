import useSWR from "swr";
import { StyledButton, StyledForm } from "@/styles";

export default function NewWorkoutForm({ setNewWorkout }) {
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
      setNewWorkout(false);
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <StyledForm onSubmit={createWorkout}>
      <StyledButton type="submit">Create</StyledButton>
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
    </StyledForm>
  );
}

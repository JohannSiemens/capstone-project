import useSWR from "swr";
import { StyledForm, StyledInput } from "@/styles";
import StyledButton from "@/components/StyledButton";

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
    <StyledForm className="big" onSubmit={createWorkout}>
      <StyledButton type="submit">Create</StyledButton>

      <StyledInput
        type="text"
        name="new_workout"
        id="new_workout"
        pattern="[A-Za-z]{1,20}"
        placeholder="Workout title ..."
        required
      ></StyledInput>
    </StyledForm>
  );
}

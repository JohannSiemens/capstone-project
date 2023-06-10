import useSWR from "swr";
import Input from "@/components/Input";
import Button from "@/components/Button";
import StyledForm from "@/components/Form";

export default function NewWorkoutForm({ newWorkoutSetter }) {
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
      newWorkoutSetter();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <StyledForm variant="small" onSubmit={createWorkout}>
      <Button type="submit">Create</Button>
      <Input
        type="text"
        name="new_workout"
        id="new_workout"
        pattern="[A-Za-z]{1,20}"
        placeholder="Workout title ..."
        required
      />
    </StyledForm>
  );
}

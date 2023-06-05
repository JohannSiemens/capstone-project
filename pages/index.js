import NewWorkoutForm from "@/components/WorkoutsList/NewWorkoutForm";
import { useState } from "react";
import WorkoutsList from "@/components/WorkoutsList";
import { StyledButton } from "@/styles";

export default function Workouts() {
  const [newWorkout, setNewWorkout] = useState(false);

  function newWorkoutSetter() {
    setNewWorkout(!newWorkout);
  }

  return (
    <div>
      <h1>My Workouts</h1>
      <StyledButton onClick={newWorkoutSetter}>New Workout</StyledButton>
      {newWorkout && <NewWorkoutForm />}
      <WorkoutsList />
    </div>
  );
}

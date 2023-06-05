import NewWorkoutForm from "@/components/WorkoutsList/NewWorkoutForm";
import { useState } from "react";
import WorkoutsList from "@/components/WorkoutsList";
import { StyledButton } from "@/styles";
import { StyledH1 } from "@/styles";

export default function Workouts() {
  const [newWorkout, setNewWorkout] = useState(false);

  function newWorkoutSetter() {
    setNewWorkout(!newWorkout);
  }

  return (
    <div>
      <StyledH1>My Workouts</StyledH1>
      <StyledButton onClick={newWorkoutSetter}>New Workout</StyledButton>
      {newWorkout && <NewWorkoutForm />}
      <WorkoutsList />
    </div>
  );
}

import NewWorkoutForm from "@/components/WorkoutsList/NewWorkoutForm";
import { useState } from "react";
import WorkoutsList from "@/components/WorkoutsList";
import StyledButton from "@/components/StyledButton";
import Typography from "@/components/StyledTypography";

export default function Workouts() {
  const [newWorkout, setNewWorkout] = useState(false);

  function newWorkoutSetter() {
    setNewWorkout(!newWorkout);
  }

  return (
    <div>
      <Typography variant="h1">My Workouts</Typography>
      {newWorkout ? (
        <NewWorkoutForm setNewWorkout={setNewWorkout} />
      ) : (
        <StyledButton onClick={newWorkoutSetter}>New Workout</StyledButton>
      )}
      <WorkoutsList />
    </div>
  );
}

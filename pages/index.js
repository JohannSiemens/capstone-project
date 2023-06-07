import NewWorkoutForm from "@/components/WorkoutsList/NewWorkoutForm";
import { useState } from "react";
import WorkoutsList from "@/components/WorkoutsList";
import Button from "@/components/Button";
import Typography from "@/components/Typography";

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
        <Button onClick={newWorkoutSetter}>New Workout</Button>
      )}
      <WorkoutsList />
    </div>
  );
}

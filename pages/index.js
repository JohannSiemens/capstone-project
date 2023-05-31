import Link from "next/link";
import NewWorkoutForm from "@/components/WorkoutsList/NewWorkoutForm";
import { useState } from "react";
import WorkoutsList from "@/components/WorkoutsList";

export default function Workouts() {
  const [newWorkout, setNewWorkout] = useState(false);

  function newWorkoutSetter() {
    setNewWorkout(!newWorkout);
  }

  return (
    <div>
      <h1>My Workouts</h1>
      <button onClick={newWorkoutSetter}>New Workout</button>
      {newWorkout && <NewWorkoutForm />}
      <WorkoutsList />
    </div>
  );
}

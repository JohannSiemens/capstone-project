import Link from "next/link";
import NewWorkoutForm from "@/components/WorkoutsList/NewWorkoutForm";
import { useState } from "react";

export default function Workouts() {
  const [newWorkout, setNewWorkout] = useState(false);

  function newWorkoutSetter() {
    setNewWorkout(!newWorkout);
  }

  return (
    <div>
      <h1>My Workouts</h1>
      <button>
        <Link href="./exercises">Workout</Link>
      </button>
      <button onClick={newWorkoutSetter}>New Workout</button>
      {newWorkout && <NewWorkoutForm />}
    </div>
  );
}

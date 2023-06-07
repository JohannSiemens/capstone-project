import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import Button from "../Button";

export default function ExerciseResults({ exerciseResult, workoutID }) {
  const { mutate } = useSWR(`/api/workouts-db/${workoutID}`);

  async function addExercise(exercise) {
    const response = await fetch("/api/exercises-db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        workoutID,
      },
      body: JSON.stringify(exercise),
    });

    if (response.ok) {
      mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <ul>
      {exerciseResult.map((exercise) => (
        <li key={uuidv4()} style={{ listStyleType: "none" }}>
          {exercise.name}
          <Button onClick={() => addExercise(exercise)}>Add</Button>
        </li>
      ))}
    </ul>
  );
}

import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";

export default function ExerciseResults({ exerciseResult }) {
  const { mutate } = useSWR("/api/exercises-db");

  async function addExercise(exercise) {
    const response = await fetch("/api/exercises-db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
          <button onClick={() => addExercise(exercise)}>Add</button>
        </li>
      ))}
    </ul>
  );
}

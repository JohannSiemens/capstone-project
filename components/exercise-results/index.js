import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import Button from "../Button";
import Wrapper from "../Wrapper";
import List from "../List";

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
    <List>
      {exerciseResult.map((exercise) => (
        <Wrapper variant="row-card" key={uuidv4()}>
          <List left key={uuidv4()}>
            {exercise.name}
          </List>
          <Button onClick={() => addExercise(exercise)}>Add</Button>
        </Wrapper>
      ))}
    </List>
  );
}

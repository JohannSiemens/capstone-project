import useSWR from "swr";
import Link from "next/link";
import { useState } from "react";

export default function WorkoutsList() {
  const { data, isLoading, error, mutate } = useSWR("/api/workouts-db");
  const [isEdit, setIsEdit] = useState();

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  function isEditModeSetter(id) {
    setIsEdit(id);
  }

  async function deleteWorkout(id) {
    const response = await fetch(`/api/workouts-db/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      mutate();
    } else {
      console.error(`Error Status: ${response.status}`);
      console.error(`Error: ${error}`);
    }
  }

  async function editWorkout(event, id) {
    event.preventDefault();
    const title = event.target.elements.newWorkout.value;
    const response = await fetch(`/api/workouts-db/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(title),
    });

    if (response.ok) {
      setIsEdit();
      mutate();
    } else {
      console.error(`Error Status: ${response.status}`);
      console.error(`Error: ${error}`);
    }
  }

  return (
    <ul>
      {data.map((workout) => (
        <li key={workout._id}>
          {workout._id === isEdit ? (
            <form
              onSubmit={(event) => {
                editWorkout(event, workout._id);
              }}
            >
              <label>
                Name:
                <input
                  type="text"
                  name="newWorkout"
                  id="newWorkout"
                  pattern="[A-Za-z]{1,20}"
                  defaultValue={workout.title}
                  required
                />
              </label>
              {workout._id === isEdit && <button type="submit">Submit</button>}
            </form>
          ) : (
            <Link href={`/workout/${workout._id}`}>{workout.title}</Link>
          )}
          <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
          {workout._id !== isEdit && (
            <button onClick={() => isEditModeSetter(workout._id)}>Edit</button>
          )}
        </li>
      ))}
    </ul>
  );
}

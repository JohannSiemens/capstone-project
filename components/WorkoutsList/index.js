import useSWR from "swr";
import Link from "next/link";
import { useState, useRef } from "react";

export default function WorkoutsList() {
  const { data, isLoading, error, mutate } = useSWR("/api/workouts-db");
  const [isEdit, setIsEdit] = useState();
  const inputRef = useRef(null);

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

  async function editWorkout(id) {
    const title = inputRef.current.value;
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
            <input
              type="text"
              name="new_workout"
              id="new_workout"
              pattern="[A-Za-z]{1,20}"
              defaultValue={workout.title}
              ref={inputRef}
              required
            ></input>
          ) : (
            <Link href={`/workout/${workout._id}`}>{workout.title}</Link>
          )}
          <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
          {workout._id === isEdit ? (
            <button type="submit" onClick={() => editWorkout(workout._id)}>
              Submit
            </button>
          ) : (
            <button onClick={() => isEditModeSetter(workout._id)}>Edit</button>
          )}
        </li>
      ))}
    </ul>
  );
}

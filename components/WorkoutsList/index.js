import useSWR from "swr";
import { useState } from "react";
import List from "../List";
import Loader from "../Loader";
import WorkoutEditForm from "./WorkoutEditForm";
import WorkoutOverview from "./WorkoutOverview";

export default function WorkoutsList() {
  const { data, isLoading, error, mutate } = useSWR("/api/workouts-db");
  const [isEdit, setIsEdit] = useState();

  if (isLoading || error) {
    return <Loader />;
  }

  function isEditModeSetter(id) {
    isEdit === id ? setIsEdit("") : setIsEdit(id);
    console.log("Is Edit ID: ", id);
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
    <List>
      {data.map((workout) => (
        <List item key={workout._id}>
          {isEdit === workout._id ? (
            <WorkoutEditForm
              workout={workout}
              isEditModeSetter={isEditModeSetter}
              editWorkout={editWorkout}
            />
          ) : (
            <WorkoutOverview
              workout={workout}
              isEditModeSetter={isEditModeSetter}
              deleteWorkout={deleteWorkout}
            />
          )}
        </List>
      ))}
    </List>
  );
}

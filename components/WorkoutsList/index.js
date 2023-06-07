import useSWR from "swr";
import { useState } from "react";
import { StyledWrapperRow, StyledLink } from "@/styles";
import Button from "../Button";
import List from "../List";
import Loader from "../Loader";
import Input from "../Input";

export default function WorkoutsList() {
  const { data, isLoading, error, mutate } = useSWR("/api/workouts-db");
  const [isEdit, setIsEdit] = useState();

  if (isLoading || error) {
    return <Loader />;
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
    <List variant="ul">
      {data.map((workout) => (
        <List variant="li" key={workout._id}>
          {workout._id === isEdit ? (
            <form
              onSubmit={(event) => {
                editWorkout(event, workout._id);
              }}
            >
              <Input
                type="text"
                name="newWorkout"
                id="newWorkout"
                pattern="[A-Za-z]{1,20}"
                defaultValue={workout.title}
                placeholder="New title ..."
                required
              />

              {workout._id === isEdit && <Button type="submit">Submit</Button>}
            </form>
          ) : (
            <StyledLink href={`/workout/${workout._id}`}>
              {workout.title}
            </StyledLink>
          )}
          <StyledWrapperRow>
            <Button onClick={() => deleteWorkout(workout._id)}>Delete</Button>
            {workout._id !== isEdit && (
              <Button onClick={() => isEditModeSetter(workout._id)}>
                Edit
              </Button>
            )}
          </StyledWrapperRow>
        </List>
      ))}
    </List>
  );
}

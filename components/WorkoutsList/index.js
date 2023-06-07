import useSWR from "swr";
import { useState } from "react";
import {
  StyledListItem,
  StyledWrapperRow,
  StyledLink,
  StyledInput,
} from "@/styles";
import StyledButton from "../StyledButton";
import StyledList from "../StyledList";
import Loader from "../Loader";

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
    <StyledList>
      {data.map((workout) => (
        <StyledListItem key={workout._id}>
          {workout._id === isEdit ? (
            <form
              onSubmit={(event) => {
                editWorkout(event, workout._id);
              }}
            >
              <StyledInput
                type="text"
                name="newWorkout"
                id="newWorkout"
                pattern="[A-Za-z]{1,20}"
                defaultValue={workout.title}
                placeholder="New title ..."
                required
              />

              {workout._id === isEdit && (
                <StyledButton type="submit">Submit</StyledButton>
              )}
            </form>
          ) : (
            <StyledLink href={`/workout/${workout._id}`}>
              {workout.title}
            </StyledLink>
          )}
          <StyledWrapperRow>
            <StyledButton onClick={() => deleteWorkout(workout._id)}>
              Delete
            </StyledButton>
            {workout._id !== isEdit && (
              <StyledButton onClick={() => isEditModeSetter(workout._id)}>
                Edit
              </StyledButton>
            )}
          </StyledWrapperRow>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

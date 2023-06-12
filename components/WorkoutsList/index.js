import useSWR from "swr";
import { useState } from "react";
import StyledLink from "../StyledLink";
import Button from "../Button";
import List from "../List";
import Loader from "../Loader";
import Input from "../Input";
import Wrapper from "../Wrapper";
import StyledForm from "../Form";

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

  function WorkoutOverview({ workout }) {
    return (
      <>
        <StyledLink href={`/workout/${workout._id}`}>
          {workout.title}
        </StyledLink>
        <Wrapper variant="row">
          <Button onClick={() => deleteWorkout(workout._id)}>Delete</Button>
          <Button onClick={() => isEditModeSetter(workout._id)}>Edit</Button>
        </Wrapper>
      </>
    );
  }

  function WorkoutEditForm({ workout }) {
    return (
      <StyledForm
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
        <Wrapper variant="row">
          <Button type="submit">Submit</Button>
          <Button onClick={() => isEditModeSetter(workout._id)}>Leave</Button>
        </Wrapper>
      </StyledForm>
    );
  }

  return (
    <List>
      {data.map((workout) => (
        <List item key={workout._id}>
          {isEdit ? (
            <WorkoutEditForm workout={workout} />
          ) : (
            <WorkoutOverview workout={workout} />
          )}
        </List>
      ))}
    </List>
  );
}

import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Input from "@/components/Input";
import StyledForm from "@/components/Form";
import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";

export default function OpenCardForm({ id }) {
  const [currentSet, setCurrentSet] = useState(1);
  const { data, isLoading, mutate, error } = useSWR(`/api/exercises-db/${id}`);

  async function handleSubmit(event) {
    event.preventDefault();
    const exerciseInput = parseInt(event.target.elements.rep_input.value);
    const addedSet = {
      repetitions: exerciseInput,
      id: uuidv4(),
    };

    const response = await fetch(`/api/exercises-db/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedSet),
    });

    if (response.ok) {
      mutate();
      event.target.reset();
    } else {
      console.error(`Error Status: ${response.status}`);
      console.error(`Error: ${error}`);
    }
  }

  useEffect(() => {
    isLoading ? <Loader /> : setCurrentSet(data.sets.length + 1);
  }, [data, isLoading]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Wrapper variant="row">
        <Input
          type="number"
          name="rep_input"
          id="rep_input"
          pattern="[0-9]{1,3}"
          min="1"
          placeholder={`Set ${currentSet} repetitions ...`}
          required
        />
        <Button type="submit">Add</Button>
      </Wrapper>
    </StyledForm>
  );
}

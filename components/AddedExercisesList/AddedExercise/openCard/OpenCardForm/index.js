import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

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
    } else {
      console.error(`Error Status: ${response.status}`);
      console.error(`Error: ${error}`);
    }
  }

  useEffect(() => {
    isLoading ? <p>...loading</p> : setCurrentSet(data.sets.length + 1);
  }, [data, isLoading]);

  return (
    <form onSubmit={handleSubmit}>
      <p>Set {currentSet}</p>
      <label>
        Repetitions:
        <input
          type="number"
          name="rep_input"
          id="rep_input"
          pattern="[0-9]{1,3}"
          min="1"
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

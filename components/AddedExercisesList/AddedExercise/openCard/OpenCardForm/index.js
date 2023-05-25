import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";

export default function OpenCardForm({ currentSet, id }) {
  const { mutate } = useSWR(`/api/db/${id}`);
  async function handleSubmit(event) {
    event.preventDefault();
    const exerciseInput = event.target.elements.rep_input.value;
    const addedSet = {
      set: currentSet,
      repetitions: exerciseInput,
      id: uuidv4(),
    };

    const response = await fetch(`/api/db/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedSet),
    });

    const data = await response.json();
    console.log("Put response:", data);

    if (response.ok) {
      mutate();
    }
  }

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

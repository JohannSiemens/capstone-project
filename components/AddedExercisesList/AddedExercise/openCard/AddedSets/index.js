import useSWR from "swr";
import { useState, useRef } from "react";

export default function AddedSets({ id }) {
  const { data, isLoading, error, mutate } = useSWR(`/api/db/${id}`);
  const [isEdit, setIsEdit] = useState();
  const inputRef = useRef(null);

  function editModeSetter(setID) {
    setIsEdit(setID);
  }

  async function deleteSet(id, setID) {
    const response = await fetch(`/api/db/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        deleteSet: true,
      },
      body: JSON.stringify(setID),
    });

    if (response.ok) {
      mutate();
    } else {
      console.error(`Error Status: ${response.status}`);
      console.error(`Error: ${error}`);
    }
  }

  async function handleEdit(id, setID) {
    const repetitions = parseInt(inputRef.current.value);
    const response = await fetch(`/api/db/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        editSet: true,
      },
      body: JSON.stringify({ setID: setID, repetitions: repetitions }),
    });

    if (response.ok) {
      setIsEdit();
      mutate();
    } else {
      console.error(`Error Status: ${response.status}`);
      console.error(`Error: ${error}`);
    }
  }

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  return (
    data.sets.length > 0 && (
      <ul>
        {data.sets.map((set, index) => (
          <li key={set.id}>
            Set {index + 1} -
            {set.id === isEdit ? (
              <input
                type="number"
                name="rep_input"
                id="rep_input"
                pattern="[0-9]{1,3}"
                min="1"
                defaultValue={set.repetitions}
                ref={inputRef}
                required
              />
            ) : (
              <> Repetitions: {set.repetitions}</>
            )}
            <button onClick={() => deleteSet(data._id, set.id)}>Delete</button>
            {set.id === isEdit ? (
              <button
                type="submit"
                onClick={() => handleEdit(data._id, set.id)}
              >
                Submit
              </button>
            ) : (
              <button onClick={() => editModeSetter(set.id)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    )
  );
}

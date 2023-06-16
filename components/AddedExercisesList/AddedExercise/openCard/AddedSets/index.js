import useSWR from "swr";
import { useState } from "react";
import AddedSetsEditMode from "./AddedSetsEditMode";
import AddedSetsOverview from "./AddedSetsOverview";
import Loader from "@/components/Loader";
import List from "@/components/List";

export default function AddedSets({ id }) {
  const { data, isLoading, error, mutate } = useSWR(`/api/exercises-db/${id}`);
  const [isEdit, setIsEdit] = useState();

  function editModeSetter(setID) {
    setIsEdit(setID);
  }

  async function deleteSet(id, setID) {
    const response = await fetch(`/api/exercises-db/${id}`, {
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

  async function handleEdit(event, id, setID) {
    event.preventDefault();
    const repetitions = parseInt(event.target.elements.rep_input.value);
    const weight = parseInt(event.target.elements.weight_input.value);
    const response = await fetch(`/api/exercises-db/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        editSet: true,
      },
      body: JSON.stringify({
        setID: setID,
        repetitions: repetitions,
        weight: weight,
      }),
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
    return <Loader />;
  }

  return (
    data.sets.length > 0 && (
      <List>
        {data.sets.map((set, index) => (
          <List item key={set.id}>
            {set.id === isEdit ? (
              <AddedSetsEditMode
                set={set}
                handleEdit={handleEdit}
                dataID={data._id}
                editModeSetter={editModeSetter}
              />
            ) : (
              <AddedSetsOverview
                set={set}
                index={index}
                deleteSet={deleteSet}
                editModeSetter={editModeSetter}
                dataID={data._id}
              />
            )}
          </List>
        ))}
      </List>
    )
  );
}

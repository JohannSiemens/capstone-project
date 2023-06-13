import useSWR from "swr";
import { useState } from "react";
import Loader from "@/components/Loader";
import Button from "@/components/Button";
import List from "@/components/List";
import Input from "@/components/Input";
import Wrapper from "@/components/Wrapper";
import StyledForm from "@/components/Form";

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
    console.log("Data ID: ", id);
    console.log("Set ID: ", setID);
    const repetitions = parseInt(event.target.elements.rep_input.value);
    const response = await fetch(`/api/exercises-db/${id}`, {
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

function AddedSetsEditMode({ set, handleEdit, dataID }) {
  {
    console.log("Data ID: ", dataID);
    console.log("Set ID ", set.id);
  }
  return (
    <StyledForm onSubmit={(event) => handleEdit(event, dataID, set.id)}>
      <Input
        type="number"
        name="rep_input"
        id="rep_input"
        pattern="[0-9]{1,3}"
        min="1"
        defaultValue={set.repetitions}
        required
      />
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
}

function AddedSetsOverview({ set, index, deleteSet, editModeSetter, dataID }) {
  return (
    <Wrapper variant="column">
      Set {index + 1} -<> Repetitions: {set.repetitions}</>
      <Wrapper variant="row">
        <Button onClick={() => deleteSet(dataID, set.id)}>Delete</Button>
        <Button onClick={() => editModeSetter(set.id)}>Edit</Button>
      </Wrapper>
    </Wrapper>
  );
}

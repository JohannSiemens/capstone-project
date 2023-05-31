import OpenCard from "./openCard";
import { useState } from "react";
import useSWR from "swr";

export default function AddedExercise({ exercise }) {
  const [openCard, setOpenCard] = useState(false);
  const { mutate } = useSWR(`/api/db`);

  async function deleteExercise(id) {
    const response = await fetch(`/api/db/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      mutate();
    } else {
      console.error(`Error Status: ${response.status}`);
      console.error(`Error: ${error}`);
    }
  }

  function openCardSetter() {
    setOpenCard(!openCard);
  }
  return (
    <li key={exercise._id} style={{ listStyleType: "none" }}>
      <button onClick={openCardSetter}>
        {exercise.name} {String.fromCharCode(openCard === false ? 9660 : 9650)}
      </button>
      <button onClick={() => deleteExercise(exercise._id)}>
        Delete exercise
      </button>
      <br />
      <br />
      {openCard && <OpenCard id={exercise._id} />}
    </li>
  );
}

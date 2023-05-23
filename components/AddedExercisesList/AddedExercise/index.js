import OpenCard from "./openCard";
import { useState } from "react";

export default function AddedExercise({ exercise }) {
  const [openCard, setOpenCard] = useState(false);

  function openCardSetter() {
    setOpenCard(!openCard);
  }
  return (
    <li key={exercise.id} style={{ listStyleType: "none" }}>
      <button onClick={openCardSetter}>
        {exercise.name} {String.fromCharCode(openCard === false ? 9660 : 9650)}
      </button>
      {openCard && <OpenCard id={exercise.id} />}
    </li>
  );
}

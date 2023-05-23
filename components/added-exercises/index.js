import OpenCard from "./openCard";
import { useState } from "react";

export default function AddedExercisesList({ addedExercise }) {
  return (
    <ul>
      {addedExercise.map((exercise) => (
        <AddedExercise exercise={exercise} key={exercise.id} />
      ))}
    </ul>
  );
}

function AddedExercise({ exercise }) {
  const [openCard, setOpenCard] = useState(false);

  function openCardSetter() {
    setOpenCard(!openCard);
  }
  return (
    <li key={exercise.id}>
      <button onClick={openCardSetter}>{exercise.name}</button>
      {openCard === true ? <OpenCard exercise={exercise.id} /> : null}
    </li>
  );
}

import OpenCard from "./openCard";

export default function AddedExercises({
  addedExercise,
  openCard,
  setOpenCard,
}) {
  //State Handling mit Zustand checken und bool in addedExercise für open schaffen
  function openCardSetter(id) {
    console.log(openCard);
    setOpenCard((prevOpenCard) => (prevOpenCard === id ? null : [id]));
  }

  return (
    <ul>
      {addedExercise.map((exercise) => (
        <li key={exercise.id}>
          <button onClick={() => openCardSetter(exercise.id)}>
            {exercise.name}
          </button>
          {openCard.find((card) => {
            if (card === exercise.id) {
              return <OpenCard />;
            }
          })}
        </li>
      ))}
    </ul>
  );
}

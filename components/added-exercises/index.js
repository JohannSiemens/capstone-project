import OpenCard from "./openCard";

export default function AddedExercises({
  addedExercise,
  openCard,
  setOpenCard,
}) {
  function openCardSetter(id) {
    console.log(openCard);
    openCard.find((card) => {
      if (card !== id) {
        setOpenCard([...openCard, id]);
      } else {
        setOpenCard([...openCard]);
      }
    });
  }

  return (
    <ul>
      {addedExercise.map((exercise) => (
        <li key={exercise.id}>
          <button onClick={() => openCardSetter(exercise.id)}>
            {exercise.name}
          </button>
          {openCard.find((card) =>
            card === exercise.id ? <OpenCard /> : card
          )}
        </li>
      ))}
    </ul>
  );
}

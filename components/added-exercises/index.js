import OpenCard from "./openCard";

export default function AddedExercises({
  addedExercise,
  openCard,
  setOpenCard,
}) {
  function openCardSetter(id) {
    setOpenCard(
      openCard.map((card) => {
        if (card !== id) {
          return id;
        } else {
          return;
        }
      })
    );
  }

  return (
    <ul>
      {addedExercise.map((exercise) => (
        <li key={exercise.key}>
          <button onClick={() => openCardSetter(exercise.key)}>
            {exercise.name}
          </button>
          {openCard.find((card) =>
            card === exercise.key ? <OpenCard /> : card
          )}
        </li>
      ))}
    </ul>
  );
}

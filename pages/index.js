import ExerciseResults from "@/components/exercise-results";
import ExerciseSearchForm from "@/components/exercise-search-form";
import AddedExercises from "@/components/added-exercises";

export default function HomePage({
  setExerciseInput,
  exerciseResult,
  setExerciseResult,
  setAddedExercise,
  addedExercise,
  openCard,
  setOpenCard,
}) {
  return (
    <div>
      <h1>My Workout</h1>
      <ExerciseSearchForm
        setExerciseInput={setExerciseInput}
        setExerciseResult={setExerciseResult}
      />
      <ExerciseResults
        exerciseResult={exerciseResult}
        setAddedExercise={setAddedExercise}
        addedExercise={addedExercise}
        openCard={openCard}
        setOpenCard={setOpenCard}
      />
      <AddedExercises
        addedExercise={addedExercise}
        openCard={openCard}
        setOpenCard={setOpenCard}
      />
    </div>
  );
}

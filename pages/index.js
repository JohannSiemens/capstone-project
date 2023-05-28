import ExerciseResults from "@/components/exercise-results";
import ExerciseSearchForm from "@/components/exercise-search-form";
import AddedExercisesList from "@/components/AddedExercisesList";

export default function HomePage({ exerciseResult, setExerciseResult }) {
  return (
    <div>
      <h1>My Workout</h1>
      <ExerciseSearchForm setExerciseResult={setExerciseResult} />
      <ExerciseResults exerciseResult={exerciseResult} />
      <AddedExercisesList />
    </div>
  );
}

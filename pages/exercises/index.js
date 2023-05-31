import ExerciseResults from "@/components/exercise-results";
import ExerciseSearchForm from "@/components/exercise-search-form";
import AddedExercisesList from "@/components/AddedExercisesList";
import Link from "next/link";

export default function Exercises({ exerciseResult, setExerciseResult }) {
  return (
    <div>
      <button>
        <Link href="./">Back</Link>
      </button>
      <h1>My Workout</h1>
      <ExerciseSearchForm setExerciseResult={setExerciseResult} />
      <ExerciseResults exerciseResult={exerciseResult} />
      <AddedExercisesList />
    </div>
  );
}

import ExerciseResults from "@/components/exercise-results";
import ExerciseSearchForm from "@/components/exercise-search-form";
import AddedExercisesList from "@/components/AddedExercisesList";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Workout({ exerciseResult, setExerciseResult }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isValidating, error } = useSWR(
    `/api/workouts-db/${id}`
  );

  if (isLoading || isValidating) {
    <p>...loading</p>;
  } else if (!data) {
    return;
  } else if (error) {
    <p>An error occured!</p>;
    console.error(error);
  }

  return (
    <div>
      <button>
        <Link href="../">Back</Link>
      </button>
      <h1>My Workout</h1>
      <ExerciseSearchForm setExerciseResult={setExerciseResult} />
      <ExerciseResults exerciseResult={exerciseResult} />
      <AddedExercisesList exercises={data.exercises} />
    </div>
  );
}

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
    return <p>...loading</p>;
  } else if (error) {
    return <p>An error occured!{console.error(error)}</p>;
  }
  if (!data) {
    return;
  }

  return (
    <div>
      <button>
        <Link href="../">Back</Link>
      </button>
      <h1>{data.title}</h1>
      <ExerciseSearchForm setExerciseResult={setExerciseResult} />
      <ExerciseResults exerciseResult={exerciseResult} workoutID={data._id} />
      <AddedExercisesList workoutID={data._id} />
    </div>
  );
}

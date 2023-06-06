import ExerciseResults from "@/components/exercise-results";
import ExerciseSearchForm from "@/components/exercise-search-form";
import AddedExercisesList from "@/components/AddedExercisesList";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { StyledLoader, StyledButton, StyledH1 } from "@/styles";

export default function Workout({ exerciseResult, setExerciseResult }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isValidating, error } = useSWR(
    `/api/workouts-db/${id}`
  );

  if (isLoading || isValidating) {
    return <StyledLoader />;
  } else if (error) {
    return <p>An error occured!{console.error(error)}</p>;
  }
  if (!data) {
    return;
  }

  return (
    <div>
      <StyledH1>{data.title}</StyledH1>{" "}
      <StyledButton>
        <Link href="../">Back</Link>
      </StyledButton>
      <ExerciseSearchForm setExerciseResult={setExerciseResult} />
      <ExerciseResults exerciseResult={exerciseResult} workoutID={data._id} />
      <AddedExercisesList workoutID={data._id} />
    </div>
  );
}

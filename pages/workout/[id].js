import ExerciseResults from "@/components/exercise-results";
import ExerciseSearchForm from "@/components/exercise-search-form";
import AddedExercisesList from "@/components/AddedExercisesList";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Loader from "@/components/Loader";
import StyledButton from "@/components/StyledButton";
import Typography from "@/components/StyledTypography";

export default function Workout({ exerciseResult, setExerciseResult }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isValidating, error } = useSWR(
    `/api/workouts-db/${id}`
  );

  if (isLoading || isValidating) {
    return <Loader />;
  } else if (error) {
    return <p>An error occured!{console.error(error)}</p>;
  }
  if (!data) {
    return;
  }

  return (
    <div>
      <Typography variant="h1">{data.title}</Typography>
      <StyledButton>
        <Link href="../">Back</Link>
      </StyledButton>
      <ExerciseSearchForm setExerciseResult={setExerciseResult} />
      <ExerciseResults exerciseResult={exerciseResult} workoutID={data._id} />
      <AddedExercisesList workoutID={data._id} />
    </div>
  );
}

import ExerciseResults from "@/components/exercise-results";
import ExerciseSearchForm from "@/components/exercise-search-form";
import AddedExercisesList from "@/components/AddedExercisesList";
import { useRouter } from "next/router";
import useSWR from "swr";
import Loader from "@/components/Loader";
import Typography from "@/components/Typography";
import StyledLink from "@/components/StyledLink";

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
      <StyledLink variant="button-type" href="../">
        Back
      </StyledLink>
      <ExerciseSearchForm setExerciseResult={setExerciseResult} />
      {exerciseResult.length > 0 && (
        <ExerciseResults
          exerciseResult={exerciseResult}
          workoutID={data._id}
          setExerciseResult={setExerciseResult}
        />
      )}
      <AddedExercisesList workoutID={data._id} />
    </div>
  );
}

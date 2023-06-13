import StyledLink from "@/components/StyledLink";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";

export default function WorkoutOverview({
  workout,
  deleteWorkout,
  isEditModeSetter,
}) {
  return (
    <>
      <StyledLink variant="workout" href={`/workout/${workout._id}`}>
        {workout.title}
      </StyledLink>
      <Wrapper variant="row">
        <Button type="button" onClick={() => deleteWorkout(workout._id)}>
          Delete
        </Button>
        <Button type="button" onClick={() => isEditModeSetter(workout._id)}>
          Edit
        </Button>
      </Wrapper>
    </>
  );
}

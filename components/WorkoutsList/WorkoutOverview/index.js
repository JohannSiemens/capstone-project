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
      <StyledLink href={`/workout/${workout._id}`}>{workout.title}</StyledLink>
      <Wrapper variant="row">
        <Button onClick={() => deleteWorkout(workout._id)}>Delete</Button>
        <Button onClick={() => isEditModeSetter(workout._id)}>Edit</Button>
      </Wrapper>
    </>
  );
}

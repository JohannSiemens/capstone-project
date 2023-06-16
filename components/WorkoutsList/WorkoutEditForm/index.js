import StyledForm from "@/components/Form";
import Input from "@/components/Input";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";

export default function WorkoutEditForm({
  workout,
  isEditModeSetter,
  editWorkout,
}) {
  return (
    <StyledForm
      autoComplete="off"
      onSubmit={(event) => {
        editWorkout(event, workout._id);
      }}
    >
      <Wrapper variant="column">
        <label htmlFor="newWorkout">Workout Title:</label>
        <Input
          type="text"
          name="newWorkout"
          id="newWorkout"
          pattern="[A-Za-z]{1,20}"
          defaultValue={workout.title}
          placeholder="New title ..."
          aria-label="Title for your workout"
          required
        />
        <Wrapper variant="row">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={() => isEditModeSetter(workout._id)}>
            Leave
          </Button>
        </Wrapper>
      </Wrapper>
    </StyledForm>
  );
}

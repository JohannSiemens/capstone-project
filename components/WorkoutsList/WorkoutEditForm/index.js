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
      onSubmit={(event) => {
        editWorkout(event, workout._id);
      }}
    >
      <Input
        type="text"
        name="newWorkout"
        id="newWorkout"
        pattern="[A-Za-z]{1,20}"
        defaultValue={workout.title}
        placeholder="New title ..."
        required
      />
      <Wrapper variant="row">
        <Button type="submit">Submit</Button>
        <Button onClick={() => isEditModeSetter(workout._id)}>Leave</Button>
      </Wrapper>
    </StyledForm>
  );
}

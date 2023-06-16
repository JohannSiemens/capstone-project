import StyledForm from "@/components/Form";
import Wrapper from "@/components/Wrapper";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function AddedSetsEditMode({
  set,
  handleEdit,
  dataID,
  editModeSetter,
}) {
  return (
    <StyledForm
      autoComplete="off"
      onSubmit={(event) => handleEdit(event, dataID, set.id)}
    >
      <Wrapper variant="row">
        <label>
          Repetitions:{" "}
          <Input
            type="number"
            name="rep_input"
            id="rep_input"
            pattern="[0-9]{1,3}"
            min="1"
            defaultValue={set.repetitions}
            required
          />
        </label>
        <label>
          Weight:{" "}
          <Input
            type="number"
            name="weight_input"
            id="weight_input"
            pattern="[0-9]{1,3}"
            min="1"
            defaultValue={set.weight}
          />
        </label>
      </Wrapper>
      <Wrapper variant="row">
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={() => editModeSetter("")}>
          Cancel
        </Button>
      </Wrapper>
    </StyledForm>
  );
}

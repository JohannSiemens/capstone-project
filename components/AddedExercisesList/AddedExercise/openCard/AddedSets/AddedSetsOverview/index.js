import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import Button from "@/components/Button";

export default function AddedSetsOverview({
  set,
  index,
  deleteSet,
  editModeSetter,
  dataID,
}) {
  return (
    <Wrapper variant="column">
      <Typography variant="text">
        Set {index + 1} <br /> Repetitions: {set.repetitions}{" "}
        {set.weight > 0 && `Weight: ${set.weight} kg`}
      </Typography>
      <Wrapper variant="row">
        <Button onClick={() => deleteSet(dataID, set.id)}>Delete</Button>
        <Button onClick={() => editModeSetter(set.id)}>Edit</Button>
      </Wrapper>
    </Wrapper>
  );
}

import OpenCardForm from "./OpenCardForm";
import AddedSets from "./AddedSets";
import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";

export default function OpenCard({ id, deleteExercise }) {
  return (
    <>
      <Wrapper variant="row-space">
        <Button type="button" onClick={() => deleteExercise(id)}>
          Delete Exercise
        </Button>
      </Wrapper>
      <OpenCardForm id={id} />
      <AddedSets id={id} />
    </>
  );
}

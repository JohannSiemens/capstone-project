import OpenCardForm from "./OpenCardForm";
import AddedSets from "./AddedSets";
import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";

export default function OpenCard({ id, deleteExercise }) {
  return (
    <>
      <OpenCardForm id={id} />
      <AddedSets id={id} />
      <Button onClick={() => deleteExercise(id)}>Delete Exercise</Button>
    </>
  );
}

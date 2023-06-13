import OpenCardForm from "./OpenCardForm";
import AddedSets from "./AddedSets";
import Button from "@/components/Button";

export default function OpenCard({ id, deleteExercise }) {
  return (
    <>
      <Button onClick={() => deleteExercise(exercise._id)}>Delete</Button>
      <OpenCardForm id={id} />
      <AddedSets id={id} />
    </>
  );
}

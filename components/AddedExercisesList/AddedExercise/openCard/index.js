import OpenCardForm from "./OpenCardForm";
import AddedSets from "./AddedSets";

export default function OpenCard({ id }) {
  return (
    <>
      <OpenCardForm id={id} />
      <AddedSets id={id} />
    </>
  );
}

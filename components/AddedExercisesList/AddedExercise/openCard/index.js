import useLocalStorageState from "use-local-storage-state";
import OpenCardForm from "./OpenCardForm";
import AddedSets from "./AddedSets";

export default function OpenCard({ id }) {
  const [currentSet, setCurrentSet] = useLocalStorageState(id, {
    defualtValue: 1,
  });

  return (
    <>
      <OpenCardForm currentSet={currentSet} id={id} />
      <AddedSets setCurrentSet={setCurrentSet} id={id} />
    </>
  );
}

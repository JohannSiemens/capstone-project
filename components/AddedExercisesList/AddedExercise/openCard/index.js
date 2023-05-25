import useLocalStorageState from "use-local-storage-state";
import OpenCardForm from "./OpenCardForm";
import AddedSets from "./AddedSets";

export default function OpenCard({ id }) {
  const [currentSet, setCurrentSet] = useLocalStorageState(id, {
    defaultValue: 1,
  });

  return (
    <>
      <OpenCardForm
        currentSet={currentSet}
        setCurrentSet={setCurrentSet}
        exerciseID={id}
      />
      <AddedSets addedSet={addedSet} currentSet={currentSet} exerciseID={id} />
    </>
  );
}

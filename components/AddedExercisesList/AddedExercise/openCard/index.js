import useLocalStorageState from "use-local-storage-state";
import OpenCardForm from "./OpenCardForm";
import AddedSets from "./AddedSets";

export default function OpenCard({ id }) {
  const [addedSet, setAddedSet] = useLocalStorageState(id, {
    defaultValue: [],
  });
  const [currentSet, setCurrentSet] = useLocalStorageState(id + id, {
    defaultValue: 1,
  });

  return (
    <>
      <OpenCardForm
        addedSet={addedSet}
        setAddedSet={setAddedSet}
        currentSet={currentSet}
        setCurrentSet={setCurrentSet}
      />
      <AddedSets addedSet={addedSet} currentSet={currentSet} />
    </>
  );
}

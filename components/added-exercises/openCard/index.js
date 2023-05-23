import useLocalStorageState from "use-local-storage-state";

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

function OpenCardForm({ addedSet, setAddedSet, currentSet, setCurrentSet }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const exerciseInput = event.target.elements.rep_input.value;
    setAddedSet([...addedSet, { set: currentSet, repetitions: exerciseInput }]);
    setCurrentSet(currentSet + 1);
    console.log("Added Set: ", addedSet);
    console.log("Current Set :", currentSet);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Set {currentSet}</p>
      <label>
        Repetitions:
        <input
          type="number"
          name="rep_input"
          id="rep_input"
          pattern="[0-9]{1,3}"
          placeholder="1"
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

function AddedSets({ addedSet }) {
  return (
    <ul>
      {addedSet.map((set) => (
        <li key={set.set + set.repetitions}>
          Set {set.set} - Repetitions: {set.repetitions}
        </li>
      ))}
    </ul>
  );
}

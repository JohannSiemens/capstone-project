import { useState } from "react";

export default function OpenCard() {
  const [addedSet, setAddedSet] = useState([]);
  const [currentSet, setCurrentSet] = useState(1);

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
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
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
      {addedSet.map((set) => {
        <li>
          Set {set.set} - Repetitions: {set.repetitions}
        </li>;
      })}
    </ul>
  );
}

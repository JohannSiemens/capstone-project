export default function OpenCardForm({
  addedSet,
  setAddedSet,
  currentSet,
  setCurrentSet,
}) {
  async function handleSubmit(event) {
    event.preventDefault();
    const exerciseInput = event.target.elements.rep_input.value;
    setAddedSet([...addedSet, { set: currentSet, repetitions: exerciseInput }]);
    setCurrentSet(currentSet + 1);
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
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

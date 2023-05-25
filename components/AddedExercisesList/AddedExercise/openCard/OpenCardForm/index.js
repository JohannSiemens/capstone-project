export default function OpenCardForm({
  currentSet,
  setCurrentSet,
  exerciseID,
}) {
  const { mutate } = useSWR(`/api/db/${exerciseID}`);
  async function handleSubmit(event) {
    event.preventDefault();
    const exerciseInput = event.target.elements.rep_input.value;
    const set = { set: currentSet, repetitions: exerciseInput };

    const response = await fetch(`/api/db/${exerciseID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(set),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      mutate();
    }

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
          min="1"
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

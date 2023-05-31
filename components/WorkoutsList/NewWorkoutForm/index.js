export default function NewWorkoutForm() {
  return (
    <form>
      <label>
        Title:{" "}
        <input
          type="text"
          name="new_workout"
          id="new_workout"
          pattern="[A-Za-z]{1,20}"
          required
        ></input>
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

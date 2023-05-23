export default function OpenCard({ exercise }) {
  return (
    <form>
      <label>
        Set 1 {exercise}
        <input type="number" pattern="[0-9]{1,3}"></input>
      </label>
    </form>
  );
}

import { useState } from "react";

export default function OpenCard() {
  const [addedSet, setAddedSet] = useState([]);

  return (
    <form>
      <p>Set {addedSet.lenght + 1}</p>
      <label>
        Repetitions:
        <input type="number" pattern="[0-9]{1,3}" placeholder="1" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

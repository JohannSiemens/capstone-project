export default function AddedSets({ addedSet }) {
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

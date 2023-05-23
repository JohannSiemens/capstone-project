export default function AddedSets({ addedSet }) {
  return (
    addedSet.length > 0 && (
      <ul>
        {addedSet.map((set) => (
          <li key={set.set + set.repetitions}>
            Set {set.set} - Repetitions: {set.repetitions}
          </li>
        ))}
      </ul>
    )
  );
}

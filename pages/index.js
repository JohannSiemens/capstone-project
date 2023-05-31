import Link from "next/link";

export default function Workouts() {
  return (
    <div>
      <h1>My Workouts</h1>
      <button>
        <Link href="./exercises">Workout</Link>
      </button>
      <button>New Workout</button>
    </div>
  );
}

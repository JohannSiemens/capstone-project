import useSWR from "swr";

export default function WorkoutsList() {
  const { data, isLoading } = useSWR("/api/db");
}

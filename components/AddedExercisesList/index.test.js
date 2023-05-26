import { render, screen } from "@testing-library/react";
import AddedExercisesList from ".";

const testExercise = ["Dumbbell Flyes"];

test("renders an unsorted list", () => {
  render(<AddedExercisesList data={testExercise} />);
  const ul = screen.getByRole("list");
  expect(ul).toBeInTheDocument();
});

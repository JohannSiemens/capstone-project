import { render, screen } from "@testing-library/react";
import AddedExercises from ".";
import AddedExercisesList from ".";

const testExercise = ["Dumbbell Flyes"];

test("renders a list element for Dumbbell Flyes", () => {
  render(<AddedExercisesList addedExercise={testExercise} />);
  const li = screen.getByText("Dumbbell Flyes");
  expect(li).toBeInTheDocument();
});

const testExercise = ["Dumbbell Flyes"];

import { render, screen } from "@testing-library/react";
import AddedExercises from ".";

test("renders a list element for Dumbbell Flyes", () => {
  render(<AddedExercises addedExercise={testExercise} />);
  const li = screen.getByText("Dumbbell Flyes");
  expect(li).toBeInTheDocument();
});

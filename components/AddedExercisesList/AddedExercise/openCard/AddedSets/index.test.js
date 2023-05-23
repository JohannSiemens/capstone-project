import { render, screen } from "@testing-library/react";
import AddedSets from ".";

const addedSet = [{ set: 2, repetitions: 8 }];

test("renders a li for the one added set", () => {
  render(<AddedSets addedSet={addedSet} />);
  const li = screen.getByRole("listitem");
  expect(li).toBeInTheDocument();
});

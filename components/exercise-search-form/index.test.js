import { render, screen } from "@testing-library/react";
import ExerciseSearchForm from ".";

test("renders a label", () => {
  render(<ExerciseSearchForm />);
  const label = screen.getByText("Exercise:");
  expect(label).toBeInTheDocument();
});

test("renders the search input field and the search button", async () => {
  render(<ExerciseSearchForm />);

  const input = screen.getByLabelText(/exercise:/i);
  expect(input).toBeInTheDocument();

  const button = screen.getByRole("button", { name: /search/i });
  expect(button).toBeInTheDocument();
});

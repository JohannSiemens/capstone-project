import { render, screen } from "@testing-library/react";
import OpenCardForm from ".";

test("renders a label with a Repetitions: string", () => {
  render(<OpenCardForm />);
  const labelText = screen.getByLabelText("Repetitions:");
  expect(labelText).toBeInTheDocument();
});

test("renders a button with the text Add", () => {
  render(<OpenCardForm />);
  const button = screen.getByRole("button", { name: /add/i });
  expect(button).toBeInTheDocument();
});

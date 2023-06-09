import { render, screen } from "@testing-library/react";
import ExerciseResults from ".";

const testExercise = [
  {
    id: 1,
    name: "Dumbbell Flyes",
    type: "strength",
    muscle: "chest",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other. Then using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you're pressing them, but stop and hold just before you lock out. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.  Variations: You may want to use a palms facing forward version for different stimulation.",
  },
];

test("renders a list element for Dumbbell Flyes with a Button", () => {
  const exerciseResult = testExercise;
  render(<ExerciseResults exerciseResult={exerciseResult} />);
  const li = screen.getByText(/Dumbbell Flyes/i);
  expect(li).toBeInTheDocument();

  const button = screen.getByRole("button", { name: /add/i });
  expect(button).toBeInTheDocument();
});

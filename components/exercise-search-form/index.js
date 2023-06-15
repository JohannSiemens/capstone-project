import { useState } from "react";
import Loader from "../Loader";
import StyledForm from "../Form";
import Input from "../Input";
import Wrapper from "../Wrapper";
import Button from "../Button";

export default function ExerciseSearchForm({ setExerciseResult }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const exercise = event.target.elements.exercise_search.value;
    const response = await fetch(`/api/exercise-fetch/${exercise}`);
    const responseData = await response.json();
    responseData.length === 0
      ? alert("No exercises found")
      : setExerciseResult(responseData);
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <Wrapper variant="column">
            <Wrapper variant="row-space">
              <label>
                Exercise name:{" "}
                <Input
                  type="text"
                  name="exercise_search"
                  id="exercise_search"
                  pattern="[A-Za-z]{3,20}"
                  placeholder="Exercise name ..."
                  aria-label="Exercise name you want to search"
                  required
                />
              </label>
            </Wrapper>
            <Button type="submit">Search</Button>
          </Wrapper>
        </StyledForm>
      )}
    </>
  );
}

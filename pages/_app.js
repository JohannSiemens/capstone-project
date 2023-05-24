import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [exerciseInput, setExerciseInput] = useState();
  const [exerciseResult, setExerciseResult] = useState([]);
  const [addedExercise, setAddedExercise] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        exerciseResult={exerciseResult}
        setExerciseResult={setExerciseResult}
        addedExercise={addedExercise}
        setAddedExercise={setAddedExercise}
        exerciseInput={exerciseInput}
        setExerciseInput={setExerciseInput}
      />
    </>
  );
}

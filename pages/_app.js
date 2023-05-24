import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
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
      />
    </>
  );
}

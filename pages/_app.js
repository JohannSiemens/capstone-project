import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [exerciseInput, setExerciseInput] = useState();
  const [exerciseResult, setExerciseResult] = useState([]);
  const [addedExercise, setAddedExercise] = useState([]);
  const [openCard, setOpenCard] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        exerciseInput={exerciseInput}
        setExerciseInput={setExerciseInput}
        exerciseResult={exerciseResult}
        setExerciseResult={setExerciseResult}
        addedExercise={addedExercise}
        setAddedExercise={setAddedExercise}
        openCard={openCard}
        setOpenCard={setOpenCard}
      />
    </>
  );
}

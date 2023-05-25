import GlobalStyle from "../styles";
import { useState } from "react";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [exerciseResult, setExerciseResult] = useState([]);

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          exerciseResult={exerciseResult}
          setExerciseResult={setExerciseResult}
        />
      </SWRConfig>
    </>
  );
}

import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect } from "react";

import { QuizProvider, useQuizContext } from "./Context/QuizProvider";

function App() {
  return (
    <QuizProvider>
      <Application />
    </QuizProvider>
  );
}

function Application() {
  const { dispatch } = useQuizContext();

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:8080/questions");
        const data = await res.json();
        dispatch({ type: "Questions/Load", payload: data });
      } catch (err) {
        dispatch({ type: "error", payload: "Error fetching options" });
      }
    }
    getQuestions();
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}
export default App;

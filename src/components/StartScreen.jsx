import { useQuizContext } from "../Context/QuizProvider";

function StartScreen() {
  const { numQuestions, dispatch } = useQuizContext();
  function handleStart() {
    dispatch({ type: "Quiz/Start" });
  }

  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h4>{numQuestions} questions to test your React Mastery</h4>
      <button className="btn btn-ui" onClick={handleStart}>
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;

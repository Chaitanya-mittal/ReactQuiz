import { useQuizContext } from "../Context/QuizProvider";

function NextButton() {
  const { currentAns, currentQuestion, dispatch, numQuestions } =
    useQuizContext();
  function handleNext() {
    dispatch({ type: "NextQuestion" });
  }

  function handleFinish() {
    dispatch({ type: "Finished" });
  }
  return (
    currentAns !== null &&
    (currentQuestion < numQuestions - 1 ? (
      <button className="btn btn-ui" onClick={handleNext}>
        Next
      </button>
    ) : (
      <button className="btn btn-ui" onClick={handleFinish}>
        Finish
      </button>
    ))
  );
}

export default NextButton;

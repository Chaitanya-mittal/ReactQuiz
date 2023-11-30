import { useQuizContext } from "../Context/QuizProvider";

function FinishedScreen() {
  const { highscore, points, totalPoints, dispatch } = useQuizContext();
  function handleResart() {
    dispatch({ type: "Restart/Quiz" });
  }
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} points{" "}
        <span>({Number((points * 100) / totalPoints).toFixed(2)} %)</span>
      </p>
      <p className="highscore">(Highscore : {highscore})</p>
      <button className="btn btn-ui" onClick={handleResart}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;

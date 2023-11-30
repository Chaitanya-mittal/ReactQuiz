import { useQuizContext } from "../Context/QuizProvider";

function ProgressBar() {
  const { currentQuestion, points, numQuestions, totalPoints } =
    useQuizContext();
  return (
    <div className="progress">
      <progress value={currentQuestion} max={numQuestions} />
      <p>
        Question : {currentQuestion}/{numQuestions}
      </p>
      <p>
        {points}/{totalPoints} points
      </p>
    </div>
  );
}

export default ProgressBar;

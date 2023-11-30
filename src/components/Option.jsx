import { useQuizContext } from "../Context/QuizProvider";

function Option() {
  const { activeQuestion, currentAns, dispatch } = useQuizContext();
  function handleOptionSelect(index) {
    dispatch({ type: "CheckAnswer", payload: index });
  }
  return (
    <div className="options">
      {activeQuestion.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${
              currentAns === index ? "answer" : ""
            } ${
              currentAns === null
                ? ""
                : index === activeQuestion.correctOption
                ? "correct"
                : "wrong"
            }
                `}
            key={option}
            disabled={currentAns !== null}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Option;

import { useQuizContext } from "../Context/QuizProvider";
import Option from "./Option";

function Question() {
  const { activeQuestion } = useQuizContext();

  return (
    <div>
      <h3>{activeQuestion.question}</h3>
      <Option />
    </div>
  );
}

export default Question;

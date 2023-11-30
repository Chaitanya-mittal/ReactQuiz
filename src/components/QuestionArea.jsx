import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Footer from "./Footer";
import Timer from "./Timer";
import NextButton from "./NextButton";

function QuestionArea() {
  return (
    <>
      <ProgressBar />
      <Question />
      <Footer>
        <Timer />
        <NextButton />
      </Footer>
    </>
  );
}

export default QuestionArea;

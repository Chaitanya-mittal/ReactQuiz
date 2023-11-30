import { useQuizContext } from "../Context/QuizProvider";
import StartScreen from "./StartScreen";
import Loader from "./Loader";
import Error from "./Error";
import FinishedScreen from "./FinishedScreen";
import QuestionArea from "./QuestionArea";

function Main() {
  const { status } = useQuizContext();
  return (
    <main className="main">
      {status === "error" && <Error />}
      {status === "loading" && <Loader />}
      {status === "ready" && <StartScreen />}
      {status === "active" && <QuestionArea />}
      {status === "finished" && <FinishedScreen />}
    </main>
  );
}

export default Main;

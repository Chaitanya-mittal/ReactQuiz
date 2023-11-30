import { useEffect } from "react";
import { useQuizContext } from "../Context/QuizProvider";

function Timer() {
  const { timer, dispatch } = useQuizContext();
  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "Timer/Dec" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  const minutes = Math.round(timer / 60);
  const seconds = Math.round(timer % 60);
  return (
    <div className="timer">
      {minutes > 9 ? "" : "0"} {minutes} : {seconds > 9 ? "" : "0"} {seconds}{" "}
    </div>
  );
}

export default Timer;

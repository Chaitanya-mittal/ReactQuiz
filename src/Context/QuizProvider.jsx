import { createContext, useContext } from "react";
import { useReducer } from "react";
const initialState = {
  questions: [],
  // loading , error , ready , active , finished
  status: "loading",
  currentQuestion: 0,
  currentAns: null,
  points: 0,
  timer: 0,
  highscore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "Questions/Load":
      return { ...state, questions: action.payload, status: "ready" };
    case "Quiz/Start":
      return {
        ...state,
        status: "active",
        timer: 300,
      };
    case "Timer/Dec": {
      return {
        ...state,
        timer: state.timer - 1,
        status: state.timer === 0 ? "finished" : state.status,
      };
    }
    case "NextQuestion": {
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        currentAns: null,
      };
    }
    case "CheckAnswer": {
      const currq = state.questions.at(state.currentQuestion);

      return {
        ...state,
        currentAns: Number(action.payload),
        points:
          action.payload === currq.correctOption
            ? state.points + currq.points
            : state.points,
      };
    }
    case "Finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "Restart/Quiz":
      return {
        ...state,
        status: "ready",
        points: 0,
        currentAns: null,
        currentQuestion: 0,
      };
    case "Error":
      return { ...state, status: "error" };
    default:
      throw new Error("Unknown Action Type");
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      currentQuestion,
      currentAns,
      points,
      highscore,
      timer,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const totalPoints = questions.reduce((acc, prev) => acc + prev.points, 0);
  const activeQuestion = questions.at(currentQuestion);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        currentAns,
        currentQuestion,
        points,
        highscore,
        timer,
        dispatch,
        numQuestions,
        totalPoints,
        activeQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuizContext() {
  const x = useContext(QuizContext);
  if (x === undefined) {
    throw new Error("Accessing Context from out of scope");
  }
  return x;
}

export { QuizProvider, useQuizContext };

const NextButton = ({ dispatch, ans, index, numQuestions }) => {
  if (ans === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  } else {
    return (
      <button
        onClick={() => dispatch({ type: "finished" })}
        className="btn btn-ui"
      >
        Finish Quiz
      </button>
    );
  }
};

export default NextButton;

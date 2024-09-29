const Options = ({ options, dispatch, ans }) => {
  const hasAnswered = ans !== null;

  function correct(index) {
    return hasAnswered
      ? index === options.correctOption
        ? "correct"
        : "wrong"
      : "";
  }
  return (
    <div className="options">
      {options.options.map((option, index) => (
        <button
          disabled={hasAnswered}
          aria-disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option ${index === ans ? "answer" : ""} ${correct(
            index
          )}`}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;

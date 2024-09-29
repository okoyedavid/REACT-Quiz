import Options from "./Options";

const Questions = ({ questions, dispatch, answer }) => {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options options={questions} dispatch={dispatch} ans={answer} />
    </div>
  );
};

export default Questions;

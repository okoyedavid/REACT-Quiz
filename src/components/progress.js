function Progress({ index, numQuestions, points, maxPoints, ans }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(ans !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;

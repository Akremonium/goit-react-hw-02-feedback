const Feedback = ({ options, addFeedback }) => (
  <>
    <h1>Please leave feedback</h1>
    {options.map((option) => (
      <button type="button" key={option} onClick={() => addFeedback(option)}>
        {option}
      </button>
    ))}
  </>
);

export default Feedback;

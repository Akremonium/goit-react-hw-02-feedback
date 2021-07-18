const Statistics = ({ good, neutral, bad, totalFeedbacks, goodFeedbacks }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>

    {totalFeedbacks !== 0 && (
      <>
        <p>Total feedbacks: {totalFeedbacks}</p>
        <p>Positive feedbacks: {goodFeedbacks}%</p>
      </>
    )}
  </>
);

export default Statistics;

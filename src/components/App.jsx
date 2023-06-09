import { useReducer } from 'react';
import { Section } from '../components/SectionTitle/SectionTitle';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const feedbackReducer = (state, { type }) => ({
  ...state,
  [type]: state[type] + 1,
});

export const App = () => {
  const [feedbackState, dispatch] = useReducer(feedbackReducer, initialState);

  const onFeedbackCounterChange = event => {
    const name = event.target.name;
    dispatch({ type: name });
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackState).reduce(
      (acc, nextValue) => (acc += nextValue)
    );
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((feedbackState.good / total) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          labels={Object.keys(feedbackState)}
          onLeaveFeedback={onFeedbackCounterChange}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            feedbackState={feedbackState}
            countTotalFeedback={countTotalFeedback}
            percentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};

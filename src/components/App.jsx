// import React, { Component } from 'react';
import { useState } from 'react';

import { Section } from '../components/SectionTitle/SectionTitle';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';

// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const feedbackCounters = ['good', 'neutral', 'bad'];
//   const feedbackCountersValues = [good, neutral, bad];

//   const onfeedbackCountersChange = event => {
//     const { name } = event.target;
//     switch (name) {
//       case 'good':
//         setGood(prevState => prevState + 1);
//         break;
//       case 'neutral':
//         setNeutral(prevState => prevState + 1);
//         break;
//       case 'bad':
//         setBad(prevState => prevState + 1);
//         break;

//       default:
//         break;
//     }
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();
//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           labels={feedbackCounters}
//           onLeaveFeedback={onfeedbackCountersChange}
//         />
//       </Section>
//       <Section title="Statistics">
//         {countTotalFeedback() ? (
//           <Statistics
//             labels={feedbackCounters}
//             values={feedbackCountersValues}
//             countTotalFeedback={countTotalFeedback}
//             percentage={countPositiveFeedbackPercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback"></Notification>
//         )}
//       </Section>
//     </>
//   );
// };

export const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const { good, neutral, bad } = feedbackState;

  // const onfeedbackCountersChange = event => {
  //   const { name } = event.target;
  //   switch (name) {
  //     case 'good':
  //       setFeedbackState(prevState => prevState.good + 1);
  //       break;
  //     case 'neutral':
  //       setFeedbackState(prevState => prevState.neutral + 1);
  //       break;
  //     case 'bad':
  //       setFeedbackState(prevState => prevState.bad + 1);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const onFeedbackCounterChange = event => {
    const name = event.target.name;
    setFeedbackState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackState).reduce((acc, nextValue) => (acc += 1));
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

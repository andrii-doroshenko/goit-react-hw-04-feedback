import React, { Component } from 'react';
import { Section } from '../components/SectionTitle/SectionTitle';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const sum = Object.values(this.state).reduce((sum, val) => {
      return (sum += val);
    });
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              options={Object.keys(this.state)}
              state={this.state}
              countTotalFeedback={this.countTotalFeedback}
              percentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

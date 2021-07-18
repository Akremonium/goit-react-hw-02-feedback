import React, { Component } from "react";

import Feedback from "./Components/Feedback";
import Statistics from "./Components/Statistics";
import Notification from "./Components/Notification";
import Container from "./Components/Container";
import Section from "./Components/Section";

class App extends Component {
  static defaultProps = {
    totalFeedbacks: 0,
    goodFeedbacks: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
  };

  feedbackCounter() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  goodFeedbackCounter() {
    const { good, neutral, bad } = this.state;
    return (good / (good + neutral + bad)) * 100;
  }

  render(totalFeedbacks) {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section>
          <Feedback
            options={[good, neutral, bad]}
            addFeedback={this.addFeedback}
          ></Feedback>
        </Section>
        <Section>
          {totalFeedbacks !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.feedbackCounter()}
              goodFeedbacks={this.goodFeedbackCounter()}
            />
          ) : (
            <Notification message="No feedbacks yet" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;

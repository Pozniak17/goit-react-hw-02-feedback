import { Component } from 'react';
import { Title, ButtonList, Button, Wrapper } from './Feedback.styled';

export class FeedbackOption extends Component {
  goodHandleIncrement = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  neutralHandleIncrement = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  badHandleIncrement = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Wrapper>
        <Title>Please leave feedback</Title>

        <ButtonList>
          <li>
            <Button onClick={this.goodHandleIncrement}>Good</Button>
          </li>
          <li>
            <Button onClick={this.neutralHandleIncrement}>Neutral</Button>
          </li>
          <li>
            <Button onClick={this.badHandleIncrement}>Bad</Button>
          </li>
        </ButtonList>
      </Wrapper>
    );
  }
}

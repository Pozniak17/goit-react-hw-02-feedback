import { Component } from 'react';
import {
  Title,
  ButtonList,
  TextList,
  Button,
  Wrapper,
  Text,
} from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodHandleIncrement = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  neutralHandleIncrement = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  badHandleIncrement = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

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

        <Title>Statisticts</Title>
        <TextList>
          <li>
            <Text>Good: {good}</Text>
          </li>
          <li>
            <Text>Neutral: {neutral}</Text>
          </li>
          <li>
            <Text>Bad: {bad}</Text>
          </li>
        </TextList>
      </Wrapper>
    );
  }
}

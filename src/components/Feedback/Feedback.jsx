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

  render() {
    return (
      <Wrapper>
        <Title>Please leave feedback</Title>

        <ButtonList>
          <li>
            <Button>Good</Button>
          </li>
          <li>
            <Button>Neutral</Button>
          </li>
          <li>
            <Button>Bad</Button>
          </li>
        </ButtonList>

        <Title>Statistict</Title>
        <TextList>
          <li>
            <Text>Good: {this.state.good}</Text>
          </li>
          <li>
            <Text>Neutral: {this.state.neutral}</Text>
          </li>
          <li>
            <Text>Bad: {this.state.bad}</Text>
          </li>
        </TextList>
      </Wrapper>
    );
  }
}

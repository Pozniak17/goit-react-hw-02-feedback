import { Title, TextList, Text, Wrapper } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <Wrapper>
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
      <li>
        <Text>Total: {total}</Text>
      </li>
      <li>
        <Text>
          Positive feedback: {positivePercentage ? positivePercentage : 0}%
        </Text>
      </li>
    </TextList>
  </Wrapper>
);

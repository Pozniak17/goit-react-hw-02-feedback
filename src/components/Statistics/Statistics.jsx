import { TextList, Text, Wrapper, Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <Wrapper>
    <TextList>
      <Item>
        <Text>Good: {good}</Text>
      </Item>
      <Item>
        <Text>Neutral: {neutral}</Text>
      </Item>
      <Item>
        <Text>Bad: {bad}</Text>
      </Item>
      <Item>
        <Text>Total: {total}</Text>
      </Item>
      <Item>
        <Text>
          Positive feedback: {positivePercentage ? positivePercentage : 0}%
        </Text>
      </Item>
    </TextList>
  </Wrapper>
);

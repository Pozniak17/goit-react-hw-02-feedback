import { ButtonList, Button, Wrapper, Item } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrapper>
    <ButtonList>
      {options.map(option => (
        <Item key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>
            {option.slice(0, 1).toUpperCase() + option.slice(1)}
          </Button>
        </Item>
      ))}
    </ButtonList>
  </Wrapper>
);

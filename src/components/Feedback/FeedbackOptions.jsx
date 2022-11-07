import { Title, ButtonList, Button, Wrapper } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrapper>
    <Title>Please leave feedback</Title>
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </li>
      ))}
    </ButtonList>
  </Wrapper>
);

// <Wrapper>
//

// </Wrapper>

//  <li>
//         <Button onClick={this.goodHandleIncrement}>Good</Button>
//       </li>
//       <li>
//         <Button onClick={this.neutralHandleIncrement}>Neutral</Button>
//       </li>
//       <li>
//         <Button onClick={this.badHandleIncrement}>Bad</Button>
//       </li>

// goodHandleIncrement = () => {
//   this.setState(prevState => ({ good: prevState.good + 1 }));
// };

// neutralHandleIncrement = () => {
//   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
// };

// badHandleIncrement = () => {
//   this.setState(prevState => ({ bad: prevState.bad + 1 }));
// };

// countTotalFeedback = () => {
//   return this.state.good + this.state.neutral + this.state.bad;
// };

// countPositiveFeedbackPercentage = () => {
//   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
// };

import PropTypes from 'prop-types';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification.jsx';

export class App extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Функція загальної кількості відгуків
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  // Функція всього позитивних відгуків
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  //Функція зміни рейтингу, яка приймає ім'я і підставляє, в FeedbackOptions в map() замість name кожен раз ім'я(в нас їх 3)
  changeRatings = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    // деструктуризація значень із об'єкту стану
    const { good, neutral, bad } = this.state;
    // витягуємо значення об'єктів зі стану [good. neutral, bad], які передамо в рендер кнопок як пропсом через map()
    const buttonNames = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.changeRatings}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

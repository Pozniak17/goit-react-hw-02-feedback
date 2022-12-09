import PropTypes from 'prop-types';
import { Text } from '../Notification/Notification.styled.js';

export const Notification = ({ message }) => <Text>{message}</Text>;

Notification.propTypes = {
  message: PropTypes.string,
};

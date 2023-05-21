import PropTypes from 'prop-types';
import { Mesaage } from './Notification.styled';

export function Notification({ message }) {
  return <Mesaage>{message}</Mesaage>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

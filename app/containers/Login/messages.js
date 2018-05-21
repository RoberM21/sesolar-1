/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Login.header',
    defaultMessage: 'This is Login container !',
  },
  error: {
    emptyField: 'Favor de completar este campo',
    numbers: 'Solo números',
    minimumChars: 'Deben ser cuatro caracteres',
  },
});

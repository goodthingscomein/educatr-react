import { InputErrorMessage, INPUT_FIELD_ERROR_ID } from '../../../../components/form-input/form-input.components';

// Error messages
const EmailInvalidError: InputErrorMessage = { fieldId: INPUT_FIELD_ERROR_ID.EMAIL, message: 'Email is invalid' };

// Combine validators
const isValidEmailInput = (email: string): InputErrorMessage | null => {
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) return EmailInvalidError;
  return null;
};
export default isValidEmailInput;

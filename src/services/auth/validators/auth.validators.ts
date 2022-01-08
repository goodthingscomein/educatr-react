import { InputErrorMessage } from '../../../components/input/input.components';
import isValidEmailInput from './input-fields/email.validators';
import isValidPasswordInput from './input-fields/password.validators';
import doPasswordsMatch from './input-fields/confirm-password.validators';

export const validateSignUpUserInputs = (
	email: string,
	password: string,
	confirmPassword: string
): InputErrorMessage[] => {
	const errorMessages: InputErrorMessage[] = [];

	const emailErrorMessage = isValidEmailInput(email);
	const passwordErrorMessage = isValidPasswordInput(password);
	const confirmPasswordErrorMessage = doPasswordsMatch(password, confirmPassword);

	if (emailErrorMessage) errorMessages.push(emailErrorMessage);
	if (passwordErrorMessage) errorMessages.push(passwordErrorMessage);
	if (confirmPasswordErrorMessage) errorMessages.push(confirmPasswordErrorMessage);

	return errorMessages;
};

export const validateLoginUserInputs = (email: string): InputErrorMessage[] => {
	const errorMessages: InputErrorMessage[] = [];

	const emailErrorMessage = isValidEmailInput(email);

	if (emailErrorMessage) errorMessages.push(emailErrorMessage);

	return errorMessages;
};

import { InputErrorMessage, INPUT_FIELD_ERROR_ID } from '../../../../components/input/input.components';

// Error messages
const NonMatchingPasswordsError: InputErrorMessage = {
	fieldId: INPUT_FIELD_ERROR_ID.CONFIRM_PASSWORD,
	message: `Passwords do not match`,
};

// Combine validators
const doPasswordsMatch = (password: string, confirmPassword: string): InputErrorMessage | null => {
	if (password !== confirmPassword) return NonMatchingPasswordsError;
	return null;
};
export default doPasswordsMatch;

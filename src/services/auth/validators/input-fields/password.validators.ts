import { InputErrorMessage, INPUT_FIELD_ERROR_ID } from '../../../../components/form-input/form-input.components';

// Validator rules
const passwordMinLength = 8;
const isPasswordLongEnough = (password: string) => password.length >= passwordMinLength;
const doesPasswordContainUppercase = (password: string) => /(?=.*[A-Z])/.test(password);
const doesPasswordContainNumber = (password: string) => /(?=.*[0-9])/.test(password);
const doesPasswordContainSymbol = (password: string) => /(?=.*[^A-Za-z0-9])/.test(password);

// Error message
const PasswordError: InputErrorMessage = {
	fieldId: INPUT_FIELD_ERROR_ID.PASSWORD,
	message: `Must include ${passwordMinLength} characters, an uppercase, number and symbol`,
};

// Combine validators
const isValidPasswordInput = (password: string): InputErrorMessage | null => {
	if (
		!isPasswordLongEnough(password) ||
		!doesPasswordContainUppercase(password) ||
		!doesPasswordContainNumber(password) ||
		!doesPasswordContainSymbol(password)
	) {
		return PasswordError;
	}
	return null;
};
export default isValidPasswordInput;

// User input rules
export const isValidEmail = (email: string) => {
	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
};
export const isValidPassword = (password: string) => {
	return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(password);
};
export const doPasswordsMatch = (password: string, confirmPassword: string) => {
	return password === confirmPassword;
};

// Create User Input Validators
export const createUserValidators = (email: string, password: string, confirmPassword: string) => {
	return isValidEmail(email) && isValidPassword(password) && doPasswordsMatch(password, confirmPassword);
};

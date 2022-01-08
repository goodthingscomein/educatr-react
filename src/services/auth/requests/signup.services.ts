// Import validators
import { validateSignUpUserInputs } from '../validators/auth.validators';

export const SignUpUser = async (email: string, password: string, confirmPassword: string) => {
	// Check input is valid...
	if (validateSignUpUserInputs(email, password, confirmPassword).length > 0) {
		return console.error('Validators Failed: SignUpUser');
	}
	// Request auth server
	const fetchPostOptions: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	};
	const response = await fetch('http://localhost:5000/api/v1/auth/register', fetchPostOptions);
	const data = await response.json();
	return { response, data };
};

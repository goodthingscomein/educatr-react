// Import validators
import { validateLoginUserInputs } from '../validators/auth.validators';

export const LoginUser = async (email: string, password: string) => {
	// Check input is valid...
	if (validateLoginUserInputs(email).length > 0) {
		return console.error('Validators Failed: LoginUser');
	}
	// Request auth server
	const fetchPostOptions: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	};
	const response = await fetch('http://localhost:5000/api/v1/auth/login', fetchPostOptions);
	const data = await response.json();
	return { response, data };
};

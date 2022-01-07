// Import validators
import { createUserValidators } from './auth.validators';

/*
  Posts data to endpoint
  Cache response in Redux reducer
*/
export const CreateUser = async (email: string, password: string, confirmPassword: string) => {
	if (!createUserValidators(email, password, confirmPassword)) {
		return console.error('Invalid user input: Create User');
	}

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

	// Return the data
	return { response, data };
};

type CreateUserInput = {
	email: string;
	password: string;
};
// type CreateUserResponse = {};
// type CreateUserError = {};

/*
  Posts data to endpoint
  Cache response in Redux reducer
*/
export const CreateUser = async ({ email, password }: CreateUserInput) => {
	const fetchPostOptions: RequestInit = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email,
			password,
		}),
	};

	const response = await fetch('http://localhost:5000/api/v1/auth/register', fetchPostOptions);
	const data = await response.json();

	// Return the data
	return { response, data };
};

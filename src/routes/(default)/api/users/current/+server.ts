import { json } from '@sveltejs/kit';

export const GET = async ({ cookies }) => {
	if (cookies.get('user'))
		return json(
			{
				user: cookies.get('user')
			},
			{
				status: 200
			}
		);
	else
		return json(
			{
				user: null
			},
			{
				status: 401
			}
		);
};

export const DELETE = async ({ cookies }) => {
	cookies.delete('user', { path: '/' });
	return json(
		{
			user: null
		},
		{
			status: 200
		}
	);
};

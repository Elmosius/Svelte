export async function load({ fetch }) {
	const res = await fetch('/api/users/current');

	if (!res.ok) throw new Error(res.statusText);

	const body = await res.json();

	return {
		user: body.user
	};
}

export async function load({ parent }) {
	const data = await parent();

	return {
		description: `Wallet of ${data.user}`,
		balance: 10000
	};
}

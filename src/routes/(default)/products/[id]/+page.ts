import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/products/$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`/api/products/${params.id}.json`);
	return res.json();
};

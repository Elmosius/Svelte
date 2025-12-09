import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/products/$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`/api/products/${params.id}.json`);

	if (res.status !== 200) {
		error(404, {
			message: 'Product Not Found'
		});
	}

	return res.json();
};

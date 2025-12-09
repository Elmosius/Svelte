import type { RequestEvent } from '@sveltejs/kit';
import { DB_HOST, DB_USER } from '$env/static/private';
import { PUBLIC_NAME } from '$env/static/public';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { connect } from '$lib/server/database';

export async function handle({ event, resolve }: { event: RequestEvent; resolve: any }) {
	console.log(event.url.pathname);
	return await resolve(event);
}

export async function init() {
	console.info('server init');
	connect();
	console.log(DB_HOST);
	console.log(DB_USER);
	console.log(PUBLIC_NAME);
	console.info(env.HELLO);
	console.info(publicEnv.PUBLIC_HELLO);
}

import { DB_HOST, DB_USER } from '$env/static/private';

export function connect() {
	console.log('connect database', DB_HOST, DB_USER);
}

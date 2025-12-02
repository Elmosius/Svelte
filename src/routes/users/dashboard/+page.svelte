<script>
	import { goto } from '$app/navigation';

	// const { data } = $props();

	async function current() {
		const res = await fetch('/api/users/current');

		if (res.ok) {
			return await res.json();
		} else {
			console.log(res.status);
		}
	}

	async function logout() {
		const res = await fetch('/api/users/current', { method: 'DELETE' });

		if (!res.ok) return;

		await goto('/users/login');

	}
</script>
<h1>
	Page Dashboard
</h1>

{#await current()}
	<p>Loading...</p>
{:then data}
	<p>Welcome, {data.user}</p>
	<button onclick={logout}>Logout</button>
{:catch error}
	<p>Error: {error.message}</p>

{/await}

<!--<a href="/users/dashboard?logout=true">Logout</a>-->
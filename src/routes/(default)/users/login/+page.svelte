<script>
	import { goto } from '$app/navigation';

	let user = $state('');

	async function login(e) {
		e.preventDefault();
		const res = await fetch('/api/users/login', {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ user })
		});

		if (res.ok) await goto('/users/dashboard');
	}

</script>

<!--<form action="/users/login" method="get">-->
<!--	<label for="user">User</label>-->
<!--	<input id="user" name="user" type="text">-->
<!--	<button type="submit">Login</button>-->
<!--</form>-->

<form onsubmit="{login}">
	<label for="user">User</label>
	<input bind:value={user} id="user" name="user" type="text">
	<button type="submit">Login</button>
</form>
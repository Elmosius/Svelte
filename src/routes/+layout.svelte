<script>
	import { page } from '$app/state';

	const { children, data } = $props();
</script>

<p>
	{page.url.pathname}
</p>

<ul>
	<li>
		<a href="/">Home</a>
	</li>
	<li>
		<a href="/counter">Counter</a>
	</li>
	<li>
		<a href="/profile/user">Profile</a>
	</li>
	<li>
		<a href="/products">Products (fetch)</a>
	</li>
	<li>
		<a href="/todos">Todos (client load vs server load func)</a>
	</li>
	<li>
		<a href="/users/dashboard">dashboard user (coba server load parameter)</a>
	</li>
</ul>

{@render children()}

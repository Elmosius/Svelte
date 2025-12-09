<script>
	import { page } from '$app/state';

	const { children, data } = $props();
</script>

<p>
	{page.url.pathname}
</p>

<ul data-sveltekit-preload-data="tap">
	<li>
		<a href="/home">Home</a>
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
	<li>
		<a href="/navigation">Navigation</a>
	</li>
	<li>
		<a href="/home">Home (Optional Parameter + matchers)</a>
	</li>
	<li>
		<a href="/files/1">Files (Rest Parameter + matchers)</a>
	</li>
</ul>

{@render children()}

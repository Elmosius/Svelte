<script>
	const { children } = $props();
</script>

<h1>
	Hi, I'm a guest layout!
</h1>

<ul>
	<li><a href="/about">About</a></li>
	<li><a href="/a">Go to A </a></li>
	<li><a href="/a/b">Go to B </a></li>
	<li><a href="/a/b/c">Go to C </a></li>
</ul>

{@render children()}
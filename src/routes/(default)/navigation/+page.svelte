<script>
	import { goto } from '$app/navigation';

	let location = $state('');

	function go() {
		goto(location);
	}
</script>

<h1>
	Page Navigation
</h1>

<div>
	<label for="location">Location</label>
	<input bind:value={location} id="location" type="text" />
	<button onclick={go}>Go</button>
</div>
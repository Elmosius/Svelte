<script>
    let count = $state(0);
    let interval = $state(1000);

    // opsi terakhir jika butuh effect
    $effect(() => {
        const id = setInterval(() => {
            count += 1;
        }, interval)

        return () => clearInterval(id);
    })
</script>

<main>
    <h1>{count}</h1>
    <button onclick="{() => interval += 1000}">Interval: {interval}m/s</button>
</main>
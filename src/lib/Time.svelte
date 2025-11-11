<script>
    const time = (node, interval) => {
        const text = node.textContent;

        $effect(() => {
            const id = setInterval(() => {
                node.textContent = text + ' ' + new Date().toLocaleTimeString();
            }, interval);
            return () => clearInterval(id);
        })
    }
</script>

<main>
    <h3 use:time={500}>Hello World</h3>
    <p use:time={1000}>Hello World</p>
</main>
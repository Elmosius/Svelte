<script>
    let count = $state([]);
    let total = $derived(count.reduce((a, b) => a + b, 0))
    let total2 = $derived.by(() => {
        let sum = 0
        for (let i = 0; i < count.length; i++) {
            sum += count[i]
        }
        return sum
    })

    let total3 = $derived(sumArray())

    function sumArray() {
        let sum = 0
        for (let i = 0; i < count.length; i++) {
            sum += count[i]
        }
        return sum
    }

    function increment() {
        count.push(1)
    }

    // hanya jalan di mode development
    $inspect(count).with((type, values) => console.log(type, values))
</script>

<main>
    <h1 id="counter">Counter : {count.join("+")} = {total3}</h1>
    <button onclick={increment}>On Click</button>
</main>
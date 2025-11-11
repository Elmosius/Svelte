<script>
    import Button from "./Button.svelte";

    console.log("Hello Svelte");

    const name = "Svelte";
    const content = '<h3>Hello World</h3>'
</script>

<main>
    <h1>Hello {name.toUpperCase()}</h1>
    {@html content}
    <Button text="Click Me"/>
</main>

<style>
    h1 {
        color: red;
    }
</style>
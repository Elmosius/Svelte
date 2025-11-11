<script>

    async function getArticle() {
        let res = await fetch('/article.json')
        return res.json()
    }
</script>

<main>
    {#await getArticle()}
        <p>
            Loading...
        </p>
    {:then articles}
        {#each articles as article}
            <h3>{article.title}</h3>
            <p>{article.content}</p>
        {/each}
    {:catch error}
        <p>Error: {error.message}</p>
    {/await}
</main>
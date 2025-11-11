<script>
    const {id, name, address} = $props();
</script>

<main>
    <table>
        <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{address}</td>
        </tr>
        </tbody>
    </table>
</main>
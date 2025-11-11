<script>

    import ContextCounter from "./lib/ContextCounter.svelte";
    import {setContext} from "svelte";

    const user = {
        id: 1,
        name: "John",
        address: "123 Main St"
    }

    const counter = $state({count: 0})
    setContext('counter', counter)
</script>

<main>
    <!--    <HelloSvelte/>-->
    <!--    <Counter/>-->
    <!--    <SayHello/>-->
    <!--    <CounterDerived/>-->

    <!--    <GlobalCounter/>-->
    <!--    <GlobalCounter/>-->
    <!--    <GlobalCounter/>-->

    <!--    <AutoCounter/>-->
    <!--    <User {...user}/>-->
    <!--    <Article/>-->
    <!--    <TodoApp/>-->
    <!--    <Time/>-->
    <!--    <Student/>-->

    <!--    <StoreCounter/>-->
    <!--    <StoreCounter/>-->
    <!--    <Button>-->
    <!--        <StoreCounter/>-->
    <!--    </Button>-->

    <ContextCounter/>
    <ContextCounter/>
    <ContextCounter/>

</main>

import {writable} from "svelte/store";

export const counter = writable({
    count: 0,
})

export const increment = () => counter.update(value => ({count: value.count + 1}))
counter.subscribe(value => console.log(value.count))
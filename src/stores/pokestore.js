import { writable } from "svelte/store";

export const pokemon = writable([]);

const fetchPokemon = async () => {
    const url = `https://www.reddit.com/r/sveltejs/hot.json?limit=10`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => ({
            title: data.title,
            id: index + 1
    }));
    pokemon.set(loadedPokemon);
};
fetchPokemon();


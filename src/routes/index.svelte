<script>
    import {pokemon} from '../stores/pokestore';
    import PokemanCard from '../components/pokemanCard.svelte';

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        console.log(searchTerm);
        if(searchTerm) {
            filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            filteredPokemon = [...$pokemon]
        }
    }

</script>

<svelte:head>
    <title>SvelteKit Pokedex</title>
</svelte:head>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman}
        <PokemanCard pokeman={pokeman} />
    {/each}
</div>
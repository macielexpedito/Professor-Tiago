async function getPokemon(pokemon) {

    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const pokemonData = await fetch(url);
        console.log(pokemonData);
        console.log(pokemonData.ok);
        if(pokemonData.status !==200) {
            throw new Error("Pokemon não encontrado.verifique o número digitado");            
        }
        

    } catch (error) {
        console.log(error.message);

    }

}
getPokemon("25");

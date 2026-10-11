import { useState } from 'react'


async function FetchPokemon(pokemonName) {
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .catch(function (err) {
            console.error(err);
            throw err;
        })
    const data = await pokemon.json();
    return {
        id: pokemonName,
        url: data.sprites.front_default
    };
}


export default function Cards(array) {
    const [pokemon, SetPokemon] = useState([]);

    useEffect(() => {
        async function loadPokemon() {
            try {
                const names = ["pikachu", "ditto", "charmander"];
                const results = await Promise.all(names.map(FetchPokemon));
            }
            catch (err) {
                console.error("Failed to fetch image data", err);
            }

        }
        loadPokemon();

    }, []);
    //remember, the dependancy array is a mandatory second argument for useEffect()

    pokemonList.push(["pikachu", GetPokemon("ditto")]);

    return <div id="table">
        {pokemonList.map((name, url) => (
            <img
                key={url}
                src={url}
                alt={name}
            />
        ))}
    </div>
}
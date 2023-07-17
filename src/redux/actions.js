import { FILTER, ORDER, ALL, CREATE, ATTACK, SOURCE, SEARCH, LOADPOKEMONS } from "./action-types";
import axios from 'axios'

export const loadPokemons = () => {
    return async(dispatch) => {
        const api = []
        const urls = await axios('https://pokeapi.co/api/v2/pokemon?limit=200')
                    .then(({ data }) => data.results)
                    .then(data => data.map((element) => element.url))
            
        const request = urls.map(url => axios(url));
            
        await Promise.all(request)
        .then(response => {
            response.forEach((response) => {
                const { id, name, height, weight, sprites, stats, types } = response.data
                let arr = [];
                types.forEach(element => {
                    arr.push(element.type.name)
                });
            const newPokemon = {
                id: id,
                name: name,
                image: sprites.other['official-artwork'].front_default,
                hp: stats[0].base_stat,
                attack: stats[1].base_stat,
                defense: stats[2].base_stat,
                speed: stats[3].base_stat,
                height: height,
                weight: weight,
                types: arr,
                source: 'api'
            }
            api.push(newPokemon)
            })
        })
        // const dataBase = await axios('http://localhost:3001/pokemons/').then(({data}) => data)
        const dataBase = await axios('https://pokeapi-back-c1an.onrender.com/pokemons/').then(({data}) => data)
        dispatch({
            type: LOADPOKEMONS,
            payload: {api, dataBase}
        })
    }
}
export const filterCards = (type) => {
    return {
        type: FILTER,
        payload: type
    }
}
export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}
export const searchCard = (param) => {
    return async(dispatch) => {
        try {
            const findPokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${param.toLowerCase()}`).then(({data}) => {
                const { id, name, height, weight, sprites, stats, types } = data
                    let arr = [];
                    types.forEach(element => {
                        arr.push(element.type.name)
                    });
                const newPokemon = {
                    id: id,
                    name: name,
                    image: sprites.other['official-artwork'].front_default,
                    hp: stats[0].base_stat,
                    attack: stats[1].base_stat,
                    defense: stats[2].base_stat,
                    speed: stats[3].base_stat,
                    height: height,
                    weight: weight,
                    types: arr,
                    source: 'api'
                }
                return newPokemon
            })
            console.log(findPokemon);
            dispatch({
                type: SEARCH,
                payload: findPokemon
            })
        } catch (error) {
            alert(error.message)
        }
    }
}
export const allPokemons = () => {
    return {
        type: ALL
    }
}
export const create = async(pokemonData) => {
    await axios.post(`https://pokeapi-back-c1an.onrender.com/pokemons/create`, pokemonData).catch(error => alert(error.message))
    return {
        type: CREATE,
        payload: pokemonData
    }
}
export const attack = (ataque) => {
    return {
        type: ATTACK,
        payload: ataque
    }
}
export const source = (fuente) => {
    return {
        type: SOURCE,
        payload: fuente
    }
}
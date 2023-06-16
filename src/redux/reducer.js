import { FILTER, ORDER, SEARCH, ALL, CREATE, ATTACK, SOURCE, LOADPOKEMONS } from "./action-types";

const initialState = {
    APIPokemons: [],
    allPokemons: [],
    pokemons: [],
    source: 'api'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADPOKEMONS:
            console.log(action.payload);
            return{
                ...state,
                APIPokemons: action.payload.api,
                allPokemons: action.payload.dataBase,
                pokemons: action.payload.api
            }
        case FILTER:
            return {
                ...state,
                pokemons: state.APIPokemons.filter(pokemon => pokemon.types.includes(action.payload))
            }
        case ORDER: {
            const orderPokemons = state.pokemons.sort((a,b) => {
                if(action.payload === 'A'){
                    if(a.id < b.id) return -1;
                    return 1;
                } if(action.payload === 'D'){
                    if(a.id > b.id) return -1;
                    return 1;
                }
            });
            const orderAllPokemons = state.allPokemons.sort((a,b) => {
                if(action.payload === 'A'){
                    if(a.id < b.id) return -1;
                    return 1;
                } if(action.payload === 'D'){
                    if(a.id > b.id) return -1;
                    return 1;
                }
            });
            const orderAPIPokemons = state.APIPokemons.sort((a,b) => {
                if(action.payload === 'A'){
                    if(a.id < b.id) return -1;
                    return 1;
                } if(action.payload === 'D'){
                    if(a.id > b.id) return -1;
                    return 1;
                }
            });
            return {
                APIPokemons: [...orderAPIPokemons],
                allPokemons: [...orderAllPokemons],
                pokemons: [...orderPokemons]
            }}
        case SEARCH:
            return {
                ...state,
                pokemons: [action.payload]
            }
        case ALL:
            return {
                ...state,
                pokemons: state.APIPokemons
            }
        case CREATE:
            return {
                ...state,
                allPokemons: [...state.allPokemons, action.payload]
            }
        case ATTACK: {
            const poderosos = state.pokemons.sort((a,b) => {
                if(action.payload === 'A'){
                    if(a.attack > b.attack) return -1;
                    else if(a.attack < b.attack) return 1;
                    else return 0
                } if(action.payload === 'D'){
                    if(a.attack < b.attack) return -1;
                    else if(a.attack > b.attack) return 1;
                    else return 0
                }
            });
            return {
                ...state,
                pokemons: [...poderosos]
            }
        }
        case SOURCE: {
            if(action.payload === 'api'){
                return {
                    ...state,
                    pokemons: state.APIPokemons,
                    source: action.payload
                }
            }
            else {
                return {
                    ...state,
                    pokemons: state.allPokemons,
                    source: action.payload
                }
            }
        }
        default:
            return state;
    }
}

export default reducer
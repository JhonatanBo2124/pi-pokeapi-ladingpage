// import axios from "axios";
import style from './Cards.module.css'
import Card from "../Card/Card";
import Pagination from '../Pagination/Pagination'
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types'
import add from '../../../public/add.png'
import atras from '../../../public/back.png'
import load from '../../../public/pikachu-pokemon.gif'
import { useNavigate } from 'react-router-dom';
import { allPokemons } from '../../redux/actions';

const Cards = ({ pagina, setPagina, porPagina}) => {
    const pokemons = useSelector(state => state.pokemons);
    let maximo = Math.ceil(pokemons.length /porPagina);
    let navigate = useNavigate()
    let dispatch = useDispatch()

    return(
        <div className={style.container}>
            <a onClick={() => navigate('/create')} className={style.add}>
                <img src={add} alt="" />
            </a>
            {pokemons.length === 1 && <a className={style.back} onClick={() => dispatch(allPokemons())}>
                <img src={atras} alt="" />
            </a>}
            {!pokemons.length && <a className={style.load}>
                <img src={load} alt="" />
                <h2>Cargando...</h2>
            </a>}
        {pokemons.slice((pagina-1) * porPagina, (pagina-1) * porPagina + porPagina).map(pokemon => {
            return(
                <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                hp={pokemon.hp}
                attack={pokemon.attack}
                defense={pokemon.defense}
                speed={pokemon.speed}
                height={pokemon.height}
                weight={pokemon.weight}
                types={pokemon.types}
                source={pokemon.source}
                />
            )
        })}
        <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>
        </div>
    )
}
Cards.propTypes = {
    pagina: PropTypes.number,
    setPagina: PropTypes.func,
    porPagina: PropTypes.number
}

export default Cards
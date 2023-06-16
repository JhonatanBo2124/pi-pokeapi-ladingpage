import axios from 'axios'
import style from './Detail.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import atras from '../../../public/back.png'
// import PropTypes from 'prop-types'

// const pokemon = await axios('http://localhost:3001/pokemons/634').then(({data}) => data)
// const { id, name, image, hp, attack, defense, speed, height, weight } = pokemon
// const atributes = [ hp, attack, defense, speed]
const Detail = () => {

    const { id } = useParams()
    let [pokemon, setPokemon] = useState({});
    let navigate = useNavigate()

    useEffect(() => {
        axios(`https://pi-pokeapi-backend-production.up.railway.app/pokemons/${id}`).then(({data}) => {
            setPokemon(data);
        })
    }, [id])
    const { name, image, hp, attack, defense, speed, height, weight, types } = pokemon
    const atributes = [ hp, attack, defense, speed ]
    return(
        <div className={style.container}>
            <a className={style.back} onClick={() => navigate('/home')}>
                <img src={atras} alt="" />
            </a>
            <div className={style.card}>
                <h1>{name}</h1>
                <div className={style.info}>
                    <img src={image} alt="" />
                    <div>
                        <h2>ID: &nbsp;&nbsp;{id}</h2>
                        <h2>heigth: &nbsp;{height/10} m</h2>
                        <h2>weight: &nbsp;{weight/10} kg</h2>
                        <h2>type:{` ${types}`}</h2>
                    </div>
                </div>
                <div className={style.barras}>
                    {atributes.map(atrubute => {
                        const barra1 = {
                            backgroundColor: 'rgb(230, 255, 255)',
                            height: `${atrubute}px`,
                            width: '35px',
                            margin: '10px 20px',
                            borderRadius: '5px',
                            filter: 'drop-shadow(2px 2px 16px aqua)',
                        }
                        return(
                            <>
                            <div style={barra1}></div>
                            </>
                        )
                    })}
                    <h2>{hp}</h2>
                    <h2>{attack}</h2>
                    <h2>{defense}</h2>
                    <h2>{speed}</h2>
                    <h2>hp</h2>
                    <h2>attack</h2>
                    <h2>defense</h2>
                    <h2>speed</h2>

                </div>
            </div>
        </div>
    )
}
// Detail.PropTypes = {
//     id: PropTypes.number,
// }
export default Detail
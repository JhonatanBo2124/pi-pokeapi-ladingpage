import { useState } from 'react'
import style from './Create.module.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { allPokemons, create } from '../../redux/actions'
import atras from '../../../public/back.png'
import validations from './validatios'

const Create = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [ errors, setErrors ] = useState({})
    let [ complete, setComplete ] = useState(false)
    let [ info, setInfo ] = useState({hp: 50, attack: 50, defense: 50, speed: 50})

    const datosCompletos = info.id && info.name && info.image && info.hp
    && info.attack && info.defense && info.speed && info.height && info.weight && info.types ? true : false;

    const onCreate = async(event) => {
        event.preventDefault()
        if(datosCompletos){
            const pokemonData = {
                id: Number(info.id),
                name: info.name,
                image: info.image,
                hp: Number(info.hp),
                attack: Number(info.attack),
                defense: Number(info.defense),
                speed: Number(info.speed),
                height: Number(info.height),
                weight: Number(info.weight),
                types: info.types
            }
            await axios.post(`http://localhost:3001/pokemons/create`, pokemonData).catch(error => alert(error.message))
            dispatch(create(pokemonData))
            dispatch(allPokemons())
            navigate(`/home/detail/${pokemonData.id}`)
        } else {
            setErrors({error: 'faltan datos por completar'})
        }
    }
    const handleChange = (event) => {
        setErrors(validations(event.target.name, event.target.value))
        setInfo({...info, [event.target.name]: event.target.value})
        datosCompletos ? setComplete(true) : setComplete(false)
    }
    return (
        <div className={style.container}>
            <a className={style.back} onClick={() => navigate('/home')}>
                <img src={atras} alt="" />
            </a>
            <div className={style.card}>
                <h1>Create new Pokemon</h1>
                {errors.error && <h3 className={style.error}>{errors.error}</h3>}
                <form action="">
                    <input type="text" name='name' placeholder='name' onChange={handleChange}/>
                    <input type="text" name='id' placeholder='id'onChange={handleChange}/>
                    <input type="text" name='height' placeholder='height'onChange={handleChange}/>
                    <input type="text" name='weight' placeholder='weight'onChange={handleChange}/>
                    <input className={style.completeLine} type="text" name='image' placeholder='image'onChange={handleChange}/>
                    <div className={style.completeLine}>
                        Hp <input type="range" name='hp' min={0} max={150} onChange={handleChange}/>{info.hp}
                    </div>
                    <div className={style.completeLine}>
                        Attack <input type="range" name='attack' min={0} max={150} onChange={handleChange}/>{info.attack}
                    </div>
                    <div className={style.completeLine}>
                        Defense <input type="range" name='defense' min={0} max={150} onChange={handleChange}/>{info.defense}
                    </div>
                    <div className={style.completeLine}>
                        Speed <input type="range" name='speed' min={0} max={150} onChange={handleChange}/>{info.speed}
                    </div>
                    <select name="types" id="tipos" onChange={(event) => {
                        const demasDatos = info.id && info.name && info.image && info.hp
                        && info.attack && info.defense && info.speed && info.height && info.weight ? true : false
                        setInfo({...info, types:[event.target.value]})
                        if(demasDatos) setComplete(true)
                    }}>
                        <option value="" disabled selected>Type</option>
                        <option value="todos">all</option>
                        <option value="normal">normal</option>
                        <option value="fighting">fighting</option>
                        <option value="flying">flying</option>
                        <option value="poison">poison</option>
                        <option value="ground">ground</option>
                        <option value="rock">rock</option>
                        <option value="bug">bug</option>
                        <option value="ghost">ghost</option>
                        <option value="steel">steel</option>
                        <option value="fire">fire</option>
                        <option value="water">water</option>
                        <option value="grass">grass</option>
                        <option value="electric">electric</option>
                        <option value="psychic">psychic</option>
                        <option value="ice">ice</option>
                        <option value="dragon">dragon</option>
                        <option value="dark">dark</option>
                        <option value="fairy">fairy</option>
                        <option value="unknown">unknown</option>
                        <option value="shadow">shadow</option>
                    </select>
                    <button className={complete ? style.boton : style.blockButton} onClick={onCreate}>create</button>
                </form>
            </div>
        </div>
    )
}
export default Create
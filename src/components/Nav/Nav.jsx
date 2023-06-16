import style from './Nav.module.css'
import logo from '../../../public/pokemon-logo-black-transparent.png'
import button from '../../../public/buscar.png'
import menu from '../../../public/menu.png'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { allPokemons, attack, filterCards, loadPokemons, orderCards, searchCard, source } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'


const Nav = ({ setPagina }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [paramBusqueda, setParamBusqueda] = useState(null)
    let [desplegar, setDesplegar] = useState(false)

    useEffect(() => {
        dispatch(loadPokemons())
    }, [])

    const onChage = (event) => {
        setParamBusqueda(event.target.value)
    }

    const onChangeType = (event) => {
        navigate('/home')
        setPagina(1)
        setDesplegar(false)
        if(event.target.value === 'todos') return dispatch(allPokemons());
        return dispatch(filterCards(event.target.value))
    }

    const onChangeOrder = (event) => {
        navigate('/home')
        setPagina(1)
        setDesplegar(false)
        return dispatch(orderCards(event.target.value))
    }
    const onChageAttack = (event) => {
        navigate('/home')
        setPagina(1)
        setDesplegar(false)
        return dispatch(attack(event.target.value))
    }
  
    const onSearch = async(param) => {
        navigate('/home')
        setPagina(1)
        setDesplegar(false)
        dispatch(searchCard(param))
    }
    const onKeyDown = (event) => {
        if(event.keyCode === 13){
            setParamBusqueda(event.target.value)
            onSearch(paramBusqueda)
            event.target.value = ''
        }
    }
    const onChangeSource = (event) => {
        navigate('/home')
        setPagina(1)
        setDesplegar(false)
        return dispatch(source(event.target.value))
    }
    return(
        <div className={style.container}>
            <img onClick={() =>{
                dispatch(allPokemons())
                navigate('/home')
            }} src={logo} alt="" />
            <div className={desplegar ? style.visible : style.ordenamientos}>
                <select onChange={onChangeType} name="tipos" id="tipos">
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
                <select onChange={onChangeOrder} name="order" id="order">
                    <option value="" disabled selected>Order</option>
                    <option value="A">Acendente</option>
                    <option value="D">Desendente</option>
                </select>
                <select onChange={onChageAttack} name="attack" id="order">
                    <option value="" disabled selected>Attack</option>
                    <option value="A">Poderosos</option>
                    <option value="D">Menos Poderosos</option>
                </select>
                <select onChange={onChangeSource} name="attack" id="order">
                    <option value="api" selected>API</option>
                    <option value="base de datos">Data Base</option>
                </select>
            </div>
            <div>
                <input type="text" onKeyDown={onKeyDown} onChange={onChage} placeholder='Id or Name' />
                <a onClick={() => onSearch(paramBusqueda)} href='#'>
                    <img src={button} alt="" />
                </a>
            </div>
            <a className={style.menu} onClick={() => setDesplegar(!desplegar)} href="#">
                <img src={menu}/>
            </a>
        </div>
    )
}
Nav.propTypes = {
    setPagina: PropTypes.func
}

export default Nav;
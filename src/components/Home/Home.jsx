import { useNavigate } from 'react-router-dom'
import style from './Home.module.css'
import titulo from '../../../public/pokemon-logo-black-transparent.png'
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import javascript from '../../../public/javascript.png'
import react from '../../../public/react.png'
import redux from '../../../public/redux.png'
import express from '../../../public/express.png'
import posgresql from '../../../public/posgresql.png'
import sequelize from '../../../public/sequelize.png'

const Home = () => {
    const navigate = useNavigate()
    return(
        <div className={style.container}>
            <img className={style.titulo} src={titulo} alt="" />
            <div className={style.card}>
                <h2>POKEAPI</h2>
                <h4>Created by Jhonatan Bolivar</h4>
                <p>Tecnologies</p>
                <div className={style.tecnologies}>
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={javascript} alt="" />
                    <img src={react} alt="" />
                    <img src={redux} alt="" />
                    <img src={express} alt="" />
                    <img src={posgresql} alt="" />
                    <img src={sequelize} alt="" />
                </div>
            </div>
            <a href="#" className={style.ov} onClick={() => navigate('/home')}>GO HOME</a>
        </div>
    )
}
export default Home
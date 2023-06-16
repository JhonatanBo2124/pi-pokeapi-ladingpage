import logo from '../../../public/Pokemon_logo.svg'
import character from '../../../public/bulbasaur-pokemon.gif'
import boton from '../../../public/PokeBall_icon.png'
import style from './Login.module.css'

const Login = () => {
    return(
        <div className={style.containertwo}>
        <div className={style.container}>
            <img src={logo} className={style.img} id='svg' alt="" />
            <img src={character} className={style.img} alt="" />
            <form className={style.inputs}>
                {/* <img src={logo} className={style.imagen} alt="" /> */}
                <label>Email: </label>
                <input type="text" placeholder='Email' name="email" ></input>
                {/* { errors.email && <span className={style.errores}>{errors.email}</span>} */}
                <label>Password: </label>
                <input type="password" placeholder='Password' name="password"></input>
                {/* { errors.password && <span className={style.errores}>{errors.password}</span>} */}
                <a href='#'>
                    <img src={boton} className={style.boton} alt="" />
                </a>
            </form>
        </div>
        </div>
    )
}

export default Login;
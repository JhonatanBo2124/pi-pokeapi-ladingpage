import style from './Pagination.module.css'
import PropTypes from 'prop-types'
import left from '../../../public/previous.png'
import right from '../../../public/next.png'

const Pagination = ({ pagina, setPagina, maximo }) => {
    const onKeyDown = (event) => {
        if(event.keyCode === 13){
            if(event.target.value >= 1 && event.target.value <= maximo && !isNaN(Number(event.target.value))){
                setPagina(Number(event.target.value))
            }
        }
    }
    return(
        <div className={style.container}>
            <a onClick={() => pagina>1 && setPagina(pagina - 1)}>
                <img src={left} alt="" />
            </a>
            <input onKeyDown={onKeyDown} type="text" value={pagina}/>
            <h2>de {maximo}</h2>
            <a onClick={() => pagina<maximo && setPagina(pagina + 1)}>
                <img src={right} alt="" />
            </a>
        </div>
    )
}
Pagination.propTypes = {
    pagina: PropTypes.number,
    setPagina: PropTypes.func,
    maximo: PropTypes.number
}
export default Pagination
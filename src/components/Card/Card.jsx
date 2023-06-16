import { NavLink } from 'react-router-dom'
import style from './Card.module.css'
import PropTypes from 'prop-types'

const Card = (props) => {
    const { id, name, image, height, weight, types, source } = props
    
    return(
        <NavLink className={style.link} to={`detail/${id}`}>
            <div className={style.container}>
                <img src={image} alt="" />
                <div className={style.info}>
                    <h2>{`Name: ${name}`}</h2>
                    <h2>{`Height: ${height/10} m`}</h2>
                    <h2>{`Weight: ${weight/10} kg`}</h2>
                    <h2>{`Source: ${source}`}</h2>
                    <div key={id} className={style.divTypes}>
                        {
                        types?.map(type => {
                            const colors = {
                                normal: 'rgb(197, 197, 212)',
                                fighting: 'blueviolet',
                                flying: 'cyan',
                                poison: 'lightskyblue',
                                ground: 'chocolate',
                                rock: 'gray',
                                bug: 'greenyellow',
                                ghost: 'ghostwhite',
                                steel: 'gray',
                                fire: 'orange',
                                water: 'rgb(32, 72, 250)',
                                grass: 'green',
                                electric: 'yellow',
                                psychic: 'purple',
                                ice: 'white',
                                dragon: 'red',
                                dark: 'rgb(197, 197, 212)',
                                fairy: 'palevioletred',
                                unknown: 'rgb(197, 197, 212)',
                                shadow: 'gray'
                            }
                            const style = {
                                backgroundColor: colors[type],
                                margin: '8px',
                                padding: '8px',
                                borderRadius: '10px'
                            }
                            return(
                                <>
                                <h2 className={style.types} style={style}>{type}</h2>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>

        </NavLink>
    )
}
Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
    source: PropTypes.string
}

export default Card;
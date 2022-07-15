import React from "react";
import './style.css'

const Pokeinfo = ({ data }) => {
   
    return (
        <>
        {
            (!data) ? "" : (
                <>
                    <div className="infoPoke">
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                    </div>

                </>
            )
        }

        </>
    )
}
export default Pokeinfo
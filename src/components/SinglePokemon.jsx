// const SinglePokemon = ({ data }) => {
   
//     return (
//         <>
//         {
//             (!data) ? "" : (
//                 <>
//                     <h1>{data.name}</h1>
//                     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
//                     <div className="abilities">
//                         {
//                             data.abilities.map(poke=>{
//                                 return(
//                                     <>
//                                      <div className="group">
//                                         <h2>{poke.ability.name}</h2>
//                                     </div>
//                                     </>
//                                 )
//                             })
//                         }
//                     </div>
//                     <div className="base-stat">
//                         {
//                             data.stats.map(poke=>{
//                                 return(
//                                     <>
//                                         <h3>{poke.stat.name}:{poke.base_stat}</h3>
//                                     </>
//                                 )
//                             })
//                         }
//                     </div>
//                 </>
//             )
//         }

//         </>
//     )
// }
// export default SinglePokemon;

const SinglePokemon = () => {
   
    return (
        <>
           <h1>charmander</h1>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="" />
                    <div className="abilities">
                        <div className="group">
                            <h2>blaze</h2>
                        </div>                                    
                    
                        <div className="group">
                            <h3>solar-p</h3>
                        </div>
                    </div>
                    <div className="base-stat">
                        <h3>Hp:30</h3>
                        <h3>Hp:30</h3>
                        <h3>Hp:30</h3>
                        <h3>Hp:30</h3>
                        <h3>Hp:30</h3>
                    </div>
                
                </>
            )
        }

       
export default SinglePokemon;


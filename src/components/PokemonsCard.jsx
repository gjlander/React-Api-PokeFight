
 const PokemonsCard = ({poke}) => {
  console.log(poke)
   return (
     <>
         <div className="card">
                <h2>{poke?.name.english} </h2>          
             <img src={poke.sprite}/>
             {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"/> */}
        </div>
     </>
   )
 }

// export default PokemonsCard;


// const PokemonsCard = ({ pokemon, loading,infoPokemon}) => {
//    // console.log(pokemon);
//     return (
//         <>
//         {
//             loading ? <h1>Loading...</h1> :
//                 pokemon.map((item) => {
//                     return (
//                         <>
//                             <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
//                                 <h2>{item.id}</h2>
//                                 <img src={item.sprites.front_default} alt="" />
//                                 <h2>{item.name}</h2>
//                             </div>
//                         </>
//                     )
//                 })
//         }

//         </>
//     )
// }
export default PokemonsCard;
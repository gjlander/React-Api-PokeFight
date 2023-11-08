// import React,{ useEffect ,useState } from "react";
// import SinglePokemon from "../components/SinglePokemon";
// import PokemonsCard from "../components/PokemonsCard";
// // Card=PokemonsCard;
// // Pokeinfo = SinglePokemon
// import axios from "axios";
// import {getPokemons, getSinglePokemon, getPokemonById } from '../lib/dbClient.js'
// import "../styles/index.css";

// const PokePage = () => {
//     const [pokeData,setPokeData]=useState([]);
//     const [poekArr,setPokeArr]=useState([]);

//     // const [loading,setLoading]=useState(true);

//     useEffect(()=>{
//                 getPokemons().then((data)=> setPokeData(data) )
//             },[])
//     useEffect(()=>{
//             let arr=[]
//             for (let index = 0; index < 20; index++) {
//                 arr.push(pokeData[index])
//             }

//             if (arr.length > 0) {
//                 setPokeArr(arr)
                
//             }
//             },[pokeData])

//             console.log(pokeData)
//             console.log(poekArr)
//     return (     
//         <>
//             <div className="container">
//                 <div className="left-content">
//                     {poekArr?.map((e)=>(
//                         <PokemonsCard poke={e}/>
//                     )
//                     )}
                    
//                     <div className="btn-group">
//                         <button>Previous</button>
//                         <button>Next</button>
//                     </div>
//                 </div>
//                 <div className="right-content">
//                 <SinglePokemon/>
//                 </div>
    
//             </div>
//         </>
//     )
//   }
 
// export default PokePage;

// // const PokePage=()=>{
// //     const [pokeData,setPokeData]=useState([]);
// //     const [loading,setLoading]=useState(true);
// //     const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
// //     const [nextUrl,setNextUrl]=useState();
// //     const [prevUrl,setPrevUrl]=useState();
// //     const [pokeDex,setPokeDex]=useState();

// //     const pokeFun=async()=>{
// //         setLoading(true)
// //         const res=await axios.get(url);
// //         setNextUrl(res.data.next);
// //         setPrevUrl(res.data.previous);
// //         getPokemon(res.data.results)
// //         setLoading(false)
// //     }
// //     const getPokemon=async(res)=>{
// //        res.map(async(item)=>{
// //           const result=await axios.get(item.url)
// //           setPokeData(state=>{
// //               state=[...state,result.data]
// //               state.sort((a,b)=>a.id>b.id?1:-1)
// //               return state;
// //           })
// //        })   
// //     }
    
// //     useEffect(()=>{
// //         pokeFun();
// //     },[url])

// //     return(
// //         <>
// //             <div className="container">
// //                 <div className="left-content">
// //                     <PokemonsCard pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    
// //                     <div className="btn-group">
// //                         {  prevUrl && <button onClick={()=>{
// //                             setPokeData([])
// //                            setUrl(prevUrl) 
// //                         }}>Previous</button>}

// //                         { nextUrl && <button onClick={()=>{
// //                             setPokeData([])
// //                             setUrl(nextUrl)
// //                         }}>Next</button>}

// //                     </div>
// //                 </div>
// //                 <div className="right-content">
// //                    <SinglePokemon data={pokeDex}/>
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }
// // export default PokePage;

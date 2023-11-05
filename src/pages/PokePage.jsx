import Pokemons from "../components/Pokemons";

const PokePage = () => {
    return (     
      <>
          <div className="container mx-auto py-10 bg-black flex">
              <div className="left-container">
                <Pokemons/>
              </div>
              <div className="right-container">
  
              </div>
  
          </div>
      </>
    )
  }
 
export default PokePage;

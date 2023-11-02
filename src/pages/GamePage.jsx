import { useState, useEffect } from "react";
import { getSinglePokemon, getPokemonById } from "../lib/dbClient";
import BattleCard from "../components/BattleCard";

const GamePage = () => {
    //placeholder so I have something to work with until we decide how to store chosen pokemon
    const [myPokemon, setMyPokemon] = useState();
    const [enemyPokemon, setEnemyPokemon] = useState();

    useEffect(() => {
        getSinglePokemon("charmander")
            .then((pokemon) => {
                setMyPokemon(pokemon);
            })
            .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
        getPokemonById(`${Math.floor(Math.random() * 152)}`)
            .then((pokemon) => {
                setEnemyPokemon(pokemon);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center gap-10">
            <h3 className="text-4xl mt-10">Battle!</h3>
            <div className="w-full flex items-center justify-center gap-8">
                {myPokemon && <BattleCard {...myPokemon} />}
                {enemyPokemon && <BattleCard {...enemyPokemon} />}
            </div>
        </div>
    );
};

export default GamePage;

import { useState, useEffect } from "react";
import { getSinglePokemon, getPokemonById } from "../lib/dbClient";
import MyBattleCard from "../components/MyBattleCard";
import EnemyBattleCard from "../components/EnemyBattleCard";
import GameEndModal from "../components/GameEndModal";

const GamePage = () => {
    //placeholder so I have something to work with until we decide how to store chosen pokemon
    const [myPokemon, setMyPokemon] = useState();
    const [enemyPokemon, setEnemyPokemon] = useState();
    const [myHP, setMyHP] = useState({ currentHP: null, maxHP: null });
    const [enemyHP, setEnemyHP] = useState({ currentHP: null, maxHP: null });

    useEffect(() => {
        getSinglePokemon("mewtwo")
            .then((pokemon) => {
                setMyPokemon(pokemon);
                // console.log("dot notation", myPokemon.base.HP);
                setMyHP((prev) => ({
                    ...prev,
                    currentHP: pokemon.base.HP,
                    maxHP: pokemon.base.HP,
                }));
            })
            .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
        getPokemonById(`${Math.floor(Math.random() * 152)}`)
            .then((pokemon) => {
                setEnemyPokemon(pokemon);
                setEnemyHP((prev) => ({
                    ...prev,
                    currentHP: pokemon.base.HP,
                    maxHP: pokemon.base.HP,
                }));
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center gap-10">
            <h3 className="text-4xl mt-10">Battle!</h3>
            <div className="w-full flex items-center justify-center gap-8">
                {(enemyHP.currentHP <= 0 || myHP.currentHP <= 0) && (
                    <GameEndModal myCurrentHP={myHP.currentHP} />
                )}
                {myPokemon && (
                    <MyBattleCard
                        {...myPokemon}
                        enemyPokemon={enemyPokemon}
                        myHP={myHP}
                        setEnemyHP={setEnemyHP}
                        setMyHP={setMyHP}
                    />
                )}
                {enemyPokemon && (
                    <EnemyBattleCard {...enemyPokemon} enemyHP={enemyHP} />
                )}
            </div>
        </div>
    );
};

export default GamePage;

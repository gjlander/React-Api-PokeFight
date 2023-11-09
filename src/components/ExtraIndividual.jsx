/* eslint-disable react/prop-types */

import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";


const ExtraIndividual = ({ data }) => {
    const { setChosenPokemon } = useAppContext();
    const navigate = useNavigate();
    return (
        <>
            {!data ? (
                ""
            ) : (
                <div>
                    <h1>{data.name}</h1>
                    <img
                        className="block mx-auto"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                        alt=""
                    />
                    <div className="abilities">
                        <h1 className="heading">Abilities:</h1>
                        {data.abilities.map((poke) => {
                            return (
                                <>
                                    <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                </>
                            );
                        })}
                    </div>


                    <div className="base-stat">
                        {data.stats.map((poke) => {
                            return (
                                <>
                                    <h3>
                                        {poke.stat.name}:{poke.base_stat}
                                    </h3>
                                </>
                            );
                        })}
                    </div>
                    <Button
                        onClick={() => {
                            setChosenPokemon(data.id);
                            navigate("/battle");
                        }}
                        size="lg"
                        color="danger"
                        className="m-4"
                    >
                        Go Battle!
                    </Button>
                </div>
            )}
        </>

    );
};
export default ExtraIndividual;

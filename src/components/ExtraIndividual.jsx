/* eslint-disable react/prop-types */
import { btnColor } from "../utils/battleData.js";
import { Button, Progress } from "@nextui-org/react";
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
                    <h1 className="text-yellow-600">{data.name}</h1>
                    <img
                        className=" "
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                        alt=""
                    />
                    <div className="types">
                        <h1 className="heading {btnColor(type)}">Type:</h1>
                        {data.types.map((poke) => {
                            return (
                                <>
                                    <div className="group">
                                        <h2>{poke.type.name}</h2>
                                    </div>
                                </>
                            );
                        })}
                    </div>


                    <div className="base-stat text-yellow-600">
                        {data.stats.map((poke) => {
                            return (
                                <>
                                    <h3>
                                        {poke.stat.name}:<Progress
                                                            className="max-w-md mb-4"
                                                            color="danger"
                                                            now={poke.base_stat}/>
                                        
               {/* <Progress                    
                    color="danger"
                    label={`HP ${enemyHP.currentHP}/${enemyHP.maxHP}`}
                    className="max-w-md mb-4"
                /> */}
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

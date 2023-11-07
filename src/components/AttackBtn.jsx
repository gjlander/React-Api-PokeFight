import { Button } from "@nextui-org/react";
import { btnColor, baseAttack, typeAttack } from "../utils/battleData.js";
// import { editBattles } from "../lib/dbClient.js";
// import { useAppContext } from "../context/AppContext.jsx";

export default function AttackBtn({
    type,
    myBase,
    setMyHP,
    enemyPokemon,
    setEnemyHP,
    // myHP,
    // enemyHP,
}) {
    // myBase &&
    //     enemyPokemon &&
    //     console.log(myBase.Attack, enemyPokemon.base.Attack);
    // const { user } = useAppContext();

    const handleClick = () => {
        if (!myBase || !enemyPokemon) return;
        const enemyBase = enemyPokemon.base;
        // console.log(enemyBase);
        const myDmg = baseAttack(myBase, enemyBase);
        const enemyDmg = baseAttack(enemyBase, myBase);
        // console.log(dmg);

        if (type === "Base") {
            setEnemyHP((prev) => ({
                ...prev,
                currentHP: prev.currentHP - myDmg,
            }));
        } else {
            const typeDmg = typeAttack(type, enemyPokemon, myDmg);
            setEnemyHP((prev) => ({
                ...prev,
                currentHP: prev.currentHP - typeDmg,
            }));
        }
        setMyHP((prev) => ({ ...prev, currentHP: prev.currentHP - enemyDmg }));
    };
    return (
        <Button onClick={handleClick} className={btnColor(type)}>
            {type}
        </Button>
    );
}

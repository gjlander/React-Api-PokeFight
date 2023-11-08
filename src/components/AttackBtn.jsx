import { Button } from "@nextui-org/react";
import { btnColor, baseAttack, typeAttack } from "../lib/battleData";

export default function AttackBtn({
    type,
    myBase,
    setMyHP,
    enemyPokemon,
    setEnemyHP,
}) {
    // myBase &&
    //     enemyPokemon &&
    //     console.log(myBase.Attack, enemyPokemon.base.Attack);
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

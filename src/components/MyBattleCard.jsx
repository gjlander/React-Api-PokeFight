// import { useState } from "react";
import {
    Card,
    CardFooter,
    CardBody,
    Image,
    Divider,
    Progress,
} from "@nextui-org/react";
import AttackBtn from "./AttackBtn";
// import HPBar from "./HPBar";

export default function MyBattleCard({
    name,
    sprite,
    type,
    base,
    myHP,
    setMyHP,
    setEnemyHP,
    enemyPokemon,
}) {
    // const [value, setValue] = useState(myHP.currentHP);
    // setValue; //to make VS Code shutup setValue isn't called yet.
    return (
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt={name.english}
                    className="object-cover rounded-xl"
                    src={sprite}
                    width={270}
                />
            </CardBody>
            <Divider className="mb-2" />
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">
                <h4 className="font-bold text-large">{name.english}</h4>
                <Progress
                    aria-label="HP"
                    size="md"
                    value={myHP.currentHP}
                    maxValue={myHP.maxHP}
                    color="danger"
                    label={`HP ${myHP.currentHP}/${myHP.maxHP}`}
                    className="max-w-md mb-4"
                />
                <div className="flex gap-4">
                    <AttackBtn
                        type="Base"
                        setEnemyHP={setEnemyHP}
                        myBase={base}
                        enemyPokemon={enemyPokemon}
                        setMyHP={setMyHP}
                    />
                    {type.map((typing) => (
                        <AttackBtn
                            key={crypto.randomUUID()}
                            type={typing}
                            setEnemyHP={setEnemyHP}
                            myBase={base}
                            enemyPokemon={enemyPokemon}
                            setMyHP={setMyHP}
                        />
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}

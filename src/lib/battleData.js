const btnColor = (type) => {
    if (type === "Normal") {
        return "bg-slate-500";
    }
    if (type === "Fire") {
        return "bg-orange-500";
    }
    if (type === "Fighting") {
        return "bg-red-700";
    }
    if (type === "Water") {
        return "bg-blue-500";
    }
    if (type === "Flying") {
        return "bg-violet-400";
    }
    if (type === "Grass") {
        return "bg-lime-500";
    }
    if (type === "Poison") {
        return "bg-fuchsia-700";
    }
    if (type === "Electric") {
        return "bg-yellow-400";
    }
    if (type === "Ground") {
        return "bg-amber-700";
    }
    if (type === "Psychic") {
        return "bg-pink-600";
    }
    if (type === "Rock") {
        return "bg-yellow-900";
    }
    if (type === "Ice") {
        return "bg-cyan-200";
    }
    if (type === "Bug") {
        return "bg-lime-700";
    }
    if (type === "Dragon") {
        return "bg-violet-800";
    }
    if (type === "Ghost") {
        return "bg-violet-950";
    }
    if (type === "Dark") {
        return "bg-amber-900";
    }
    if (type === "Steel") {
        return "bg-stone-400";
    }
    if (type === "Fairy") {
        return "bg-pink-400";
    } else {
        return "bg-slate-700";
    }
};

const baseAttack = (baseA, baseB) => {
    let dmg = baseA.Attack - baseB.Defense;
    console.log(baseA.Attack, baseB.Defense);
    dmg < 3 ? (dmg = 3) : dmg;
    dmg > 15 ? (dmg = 15) : dmg;
    // console.log(dmg);
    return dmg;
};

const typeAttack = (myType, enemy, dmg) => {
    let typeDmg = dmg;
    switch (myType) {
        case "Psychic":
            if (
                enemy.type.includes("Fighting") ||
                enemy.type.includes("Poison")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Steel") ||
                enemy.type.includes("Psychic") ||
                enemy.type.includes("Dark")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Normal":
            if (
                enemy.type.includes("Rock") ||
                enemy.type.includes("Ghost") ||
                enemy.type.includes("Steel")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Fighting":
            if (
                enemy.type.includes("Normal") ||
                enemy.type.includes("Rock") ||
                enemy.type.includes("Steel") ||
                enemy.type.includes("Ice") ||
                enemy.type.includes("Dark")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Flying") ||
                enemy.type.includes("Poison") ||
                enemy.type.includes("Psychic") ||
                enemy.type.includes("Bug") ||
                enemy.type.includes("Ghost") ||
                enemy.type.includes("Fairy")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Flying":
            if (
                enemy.type.includes("Fighting") ||
                enemy.type.includes("Bug") ||
                enemy.type.includes("Grass")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Rock") ||
                enemy.type.includes("Steel") ||
                enemy.type.includes("Electric")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Poison":
            if (enemy.type.includes("Grass") || enemy.type.includes("Fairy")) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Poison") ||
                enemy.type.includes("Ground") ||
                enemy.type.includes("Rock") ||
                enemy.type.includes("Ghost") ||
                enemy.type.includes("Steel")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Ground":
            if (
                enemy.type.includes("Poison") ||
                enemy.type.includes("Rock") ||
                enemy.type.includes("Steel") ||
                enemy.type.includes("Fire") ||
                enemy.type.includes("Electric")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Flying") ||
                enemy.type.includes("Bug") ||
                enemy.type.includes("Grass")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Rock":
            if (
                enemy.type.includes("Flying") ||
                enemy.type.includes("Bug") ||
                enemy.type.includes("Fire") ||
                enemy.type.includes("Ice")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Fighting") ||
                enemy.type.includes("Ground") ||
                enemy.type.includes("Steel")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Bug":
            if (
                enemy.type.includes("Grass") ||
                enemy.type.includes("Psychic") ||
                enemy.type.includes("Dark")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Fighting") ||
                enemy.type.includes("Flying") ||
                enemy.type.includes("Poison") ||
                enemy.type.includes("Ghost") ||
                enemy.type.includes("Steel") ||
                enemy.type.includes("Fire") ||
                enemy.type.includes("Fairy")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Ghost":
            if (
                enemy.type.includes("Ghost") ||
                enemy.type.includes("Psychic")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Normal") ||
                enemy.type.includes("Dark")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Steel":
            if (
                enemy.type.includes("Rock") ||
                enemy.type.includes("Ice") ||
                enemy.type.includes("Fairy")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Steel") ||
                enemy.type.includes("Fire") ||
                enemy.type.includes("Water") ||
                enemy.type.includes("Electric")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Fire":
            if (
                enemy.type.includes("Bug") ||
                enemy.type.includes("Steel") ||
                enemy.type.includes("Grass") ||
                enemy.type.includes("Ice")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Rock") ||
                enemy.type.includes("Fire") ||
                enemy.type.includes("Water") ||
                enemy.type.includes("Dragon")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Water":
            if (
                enemy.type.includes("Ground") ||
                enemy.type.includes("Rock") ||
                enemy.type.includes("Fire")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Water") ||
                enemy.type.includes("Grass") ||
                enemy.type.includes("Dragon")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Grass":
            if (
                enemy.type.includes("Ground") ||
                enemy.type.includes("Rock") ||
                enemy.type.includes("Water")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Flying") ||
                enemy.type.includes("Poison") ||
                enemy.type.includes("Bug") ||
                enemy.type.includes("Steel") ||
                enemy.type.includes("Fire") ||
                enemy.type.includes("Grass") ||
                enemy.type.includes("Dragon")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Electric":
            if (enemy.type.includes("Flying") || enemy.type.includes("Water")) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Ground") ||
                enemy.type.includes("Grass") ||
                enemy.type.includes("Electric") ||
                enemy.type.includes("Dragon")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Ice":
            if (
                enemy.type.includes("Flying") ||
                enemy.type.includes("Ground") ||
                enemy.type.includes("Grass") ||
                enemy.type.includes("Dragon")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Steel") ||
                enemy.type.includes("Fire") ||
                enemy.type.includes("Water") ||
                enemy.type.includes("Ice")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Dragon":
            if (enemy.type.includes("Dragon")) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Steel") ||
                enemy.type.includes("Fairy")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Fairy":
            if (
                enemy.type.includes("Fighting") ||
                enemy.type.includes("Dragon") ||
                enemy.type.includes("Dark")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Poison") ||
                enemy.type.includes("Steel") ||
                enemy.type.includes("Fire")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        case "Dark":
            if (
                enemy.type.includes("Ghost") ||
                enemy.type.includes("Psychic")
            ) {
                typeDmg = dmg * 1.6;
            } else if (
                enemy.type.includes("Fighting") ||
                enemy.type.includes("Dark") ||
                enemy.type.includes("Fairy")
            ) {
                typeDmg = dmg * 0.625;
            }
            return typeDmg;
        default:
            return dmg;
    }
};
export { btnColor, baseAttack, typeAttack };

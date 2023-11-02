import { Button } from "@nextui-org/react";
import { btnColor } from "../lib/battleData";

export default function AttackBtn({ type }) {
    return <Button className={btnColor(type)}>{type}</Button>;
}

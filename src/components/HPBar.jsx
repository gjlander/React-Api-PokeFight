import { Progress } from "@nextui-org/react";
import { useState } from "react";

export default function HPBar({ HP }) {
    const [value, setValue] = useState(HP);
    setValue; //to make VS Code shutup setValue isn't called yet.
    console.log(HP);
    return (
        <Progress
            aria-label="HP"
            size="md"
            value={value}
            maxValue={HP}
            color="danger"
            label={`HP ${value}/${HP}`}
            className="max-w-md mb-4"
        />
    );
}

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from "@nextui-org/react";
import { getLeaderboard } from "../lib/dbClient";
import { useEffect, useState } from "react";

const columns = [
    {
        key: "username",
        label: "USERNAME",
    },
    {
        key: "battleWon",
        label: "BATTLES WON",
    },
    {
        key: "battlesLost",
        label: "BATTLES LOST",
    },
    {
        key: "totalBattles",
        label: "TOTAL BATTLES",
    },
];

export default function Leaderboard() {
    const [leaderboardRows, setLeaderboardRows] = useState();

    useEffect(() => {
        getLeaderboard().then((data) =>
            setLeaderboardRows(
                data.map((user) => ({
                    key: user._id,
                    username: user.username,
                    battleWon: user.battlesWon,
                    battlesLost: user.battlesLost,
                    totalBattles: user.battlesLost + user.battlesWon,
                }))
            )
        );
    }, []);
    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center gap-10">
            <h3 className="pt-4 text-4xl">Leaderboard</h3>
            {leaderboardRows && (
                <Table aria-label="leaderboard">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.key}>
                                {column.label}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={leaderboardRows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => (
                                    <TableCell>
                                        {getKeyValue(item, columnKey)}
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}

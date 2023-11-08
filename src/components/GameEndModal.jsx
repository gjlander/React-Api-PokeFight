import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

export default function GameEndModal({ myCurrentHP }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { user, setUser } = useAppContext();

    useEffect(() => {
        console.log("modal effect was called");
        onOpen();
        if (!user) return;
        myCurrentHP <= 0
            ? setUser((prev) => ({
                  ...prev,
                  battlesLost: prev.battlesLost + 1,
              }))
            : setUser((prev) => ({
                  ...prev,
                  battlesWon: prev.battlesWon + 1,
              }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onOpen, setUser, myCurrentHP]);

    const navigate = useNavigate();

    const handleNewPkmn = () => {
        navigate("/search");
        onOpenChange();
    };
    const handleBattleAgain = () => {
        window.location.reload(false);
        onOpenChange();
    };

    return (
        <>
            {/* <Button onPress={onOpen}>Open Modal</Button> */}
            <Modal
                hideCloseButton={true}
                isDismissable={false}
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex justify-center">
                                {myCurrentHP > 0 ? "You won!" : "You lost!"}
                            </ModalHeader>
                            <ModalBody>
                                {user ? (
                                    <>
                                        {" "}
                                        <p>
                                            Total Battles Won: {user.battlesWon}
                                        </p>
                                        <p>
                                            Total Battle Lost:{" "}
                                            {user.battlesLost}
                                        </p>
                                    </>
                                ) : (
                                    <p>
                                        Login to keep track of your battle data!
                                    </p>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={handleNewPkmn}
                                >
                                    Choose new Pokemon
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={handleBattleAgain}
                                >
                                    Battle Again
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

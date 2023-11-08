import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    // onOpen();
    useEffect(() => {
        onOpen();
    }, [onOpen]);
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
            <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex justify-center">
                                {myCurrentHP > 0 ? "You won!" : "You lost!"}
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit
                                    amet hendrerit risus, sed porttitor quam.
                                </p>
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

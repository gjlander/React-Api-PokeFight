import { useState, createContext, useContext, useEffect } from "react";

const AppContextObj = createContext();

export const useAppContext = () => useContext(AppContextObj);

const AppContext = ({ children }) => {
    const isSignedIn = JSON.parse(localStorage.getItem("user"));
    const hasPokemon = JSON.parse(localStorage.getItem("chosenPokemon"));
    const [user, setUser] = useState(isSignedIn);
    const [chosenPokemon, setChosenPokemon] = useState(hasPokemon);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("chosenPokemon", JSON.stringify(chosenPokemon));
    }, [user, chosenPokemon]);

    return (
        <AppContextObj.Provider
            value={{
                user,
                setUser,
                chosenPokemon,
                setChosenPokemon,
            }}
        >
            {children}
        </AppContextObj.Provider>
    );
};

export default AppContext;

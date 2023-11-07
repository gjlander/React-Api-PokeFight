import { useState, createContext, useContext, useEffect } from "react";

const AppContextObj = createContext();

export const useAppContext = () => useContext(AppContextObj);

const AppContext = ({ children }) => {
    const isSignedIn = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(isSignedIn);
    // const [myPokemon, setMyPokemon] = useState("charizard");

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <AppContextObj.Provider
            value={{
                user,
                setUser,
                // myPokemon,
                // setMyPokemon,
            }}
        >
            {children}
        </AppContextObj.Provider>
    );
};

export default AppContext;

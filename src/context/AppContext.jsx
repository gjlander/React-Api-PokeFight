import { useState, createContext, useContext } from "react";

const AppContextObj = createContext();

export const useAppContext = () => useContext(AppContextObj);

const AppContext = ({ children }) => {
    const isSignedIn = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(isSignedIn);

    return (
        <AppContextObj.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </AppContextObj.Provider>
    );
};

export default AppContext;

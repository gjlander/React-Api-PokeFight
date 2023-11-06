import { useState, useEffect, createContext, useContext } from "react";

const AppContextObj = createContext();

export const useAppContext = () => useContext(AppContextObj);

const AppContext = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [checkout, setCheckout] = useState({
        firstName: "",
        lastName: "",
        address: "",
        zip: "",
        city: "",
        shipping: "DHL",
        payment: "Credit_Card",
    });

    // useEffect(() => {
    //     getProducts().then((fetchedProducts) => setProducts(fetchedProducts));
    // }, []);

    return (
        <AppContextObj.Provider
            value={{
                products,
                setProducts,

                checkout,
                setCheckout,
            }}
        >
            {children}
        </AppContextObj.Provider>
    );
};

export default AppContext;

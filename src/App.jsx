// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//pages for each route
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import PokePage from "./pages/PokePage";
import GamePage from "./pages/GamePage";
import NotFound from "./pages/NotFound";

// import Background from "./components/Background";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="pokemon" element={<PokePage />} />
                    <Route path="battle" element={<GamePage />} />
                    <Route path="*" element={<NotFound />} />

                    {/* routes we could add for user experience */}
                    {/* <Route path="signin" element={<SignIn />} />
                    <Route path="register" element={<Register />} /> */}
                </Route>
            </Routes>
        </>
    );
}

export default App;

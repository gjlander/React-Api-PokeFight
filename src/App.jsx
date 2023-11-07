// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//pages for each route
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import PokePage from "./pages/PokePage";
import GamePage from "./pages/GamePage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Leaderboard from "./pages/Leaderboard";

// import Background from "./components/Background";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="pokemon" element={<PokePage />} />
                    <Route path="leaderboard" element={<Leaderboard />} />
                    <Route path="battle" element={<GamePage />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

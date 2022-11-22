import { Routes, Route, Link } from "react-router-dom";

import MemoryGame from "./routes/memory-game/MemoryGame";
import Home from "./routes/home/Home";

import { HomeButton, HomeIcon } from "./App.styled";
import NumberGame from "./routes/number-game/NumberGame";

const App = () => {
    return (
        <>
            <HomeButton to="/">
                <HomeIcon
                    src={require("./assets/img/home.png")}
                    alt="Home icon"
                />
            </HomeButton>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/memory-game" element={<MemoryGame />}></Route>
                <Route path="/number-game" element={<NumberGame />}></Route>
            </Routes>
        </>
    );
};

export default App;

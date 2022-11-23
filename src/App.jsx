import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";

import { HomeButton, HomeIcon } from "./App.styled";

import MemoryGame from "./routes/memory-game/MemoryGame";
import NumberGame from "./routes/number-game/NumberGame";
import ShapeGame from "./routes/shape-game/ShapeGame";

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
                <Route path="/shape-game" element={<ShapeGame />}></Route>
            </Routes>
        </>
    );
};

export default App;

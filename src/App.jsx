import { Routes, Route, Link } from "react-router-dom";

import MemoryGame from "./routes/memory-game/MemoryGame";
import Home from "./routes/home/Home";

import "./App.css";
import NumberGame from "./routes/number-game/NumberGame";

const App = () => {
    return (
        <>
            <Link to="/">
                <img
                    className="home-icon"
                    src={require("./assets/img/home.png")}
                    alt="Home icon"
                />
            </Link>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/memory-game" element={<MemoryGame />}></Route>
                <Route path="/number-game" element={<NumberGame />}></Route>
            </Routes>
        </>
    );
};

export default App;

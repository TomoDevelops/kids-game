import GAME_DATA from "../../data/gameData";

import "./EndScreen.css";

const EndScreen = ({ restart }) => {
    const handleClick = () => {
        restart();
    };

    return (
        <div className="end-screen">
            <img
                src={GAME_DATA["game-data"].goodJobGif}
                alt="Animated gif of dog giving good job"
            />
            <button onClick={handleClick}>もう いっかい</button>
        </div>
    );
};

export default EndScreen;

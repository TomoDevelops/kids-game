import GAME_DATA from "../../data/gameData";

import {
    StyledEndScreen,
    EndScreenImg,
    EndScreenButton,
} from "./EndScreen.styled";

const EndScreen = ({ restart }) => {
    const handleClick = () => {
        restart();
    };

    return (
        <StyledEndScreen>
            <EndScreenImg
                src={GAME_DATA["game-data"].goodJobGif}
                alt="Animated gif of dog giving good job"
            />
            <EndScreenButton onClick={handleClick}>
                もう いっかい
            </EndScreenButton>
        </StyledEndScreen>
    );
};

export default EndScreen;

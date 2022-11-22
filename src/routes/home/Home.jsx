import { GameLinks, GameLink } from "./Home.styled";

const Home = () => {
    return (
        <GameLinks>
            <GameLink to="/memory-game">かーど あわせ げーむ</GameLink>
            <GameLink to="/number-game">すうじ あて げーむ</GameLink>
            <GameLink to="/memory-game">きおく げーむ</GameLink>
            <GameLink to="/memory-game">かたち げーむ</GameLink>
            <GameLink to="/memory-game">えいご げーむ</GameLink>
        </GameLinks>
    );
};

export default Home;

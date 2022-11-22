import { StyledGameBoard } from "./GameBoard.styled";

const GameBoard = ({ gameTitle, children }) => {
    return (
        <StyledGameBoard>
            <h1>{gameTitle}</h1>
            {children}
        </StyledGameBoard>
    );
};

export default GameBoard;

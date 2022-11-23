import { useEffect, useState } from "react";

import GAME_DATA from "../../data/gameData";
import GameBoard from "../../components/shared-components/GameBoard";
import CardGrid from "../../components/shared-components/CardGrid";
import SingleShapeCard from "../../components/shape-game/SingleShapeCard";
import EndScreen from "../../components/shared-components/EndScreen";

import { PlayButton } from "./ShapeGame.styled";

const ShapeGame = () => {
    const [shapes, setShapes] = useState([]);
    const [question, setQuestions] = useState([]);
    const [userChoice, setUserChoice] = useState(null);
    const [correct, setCorrect] = useState(-1);
    const [completed, setCompleted] = useState(false);

    // Shuffle shapes array
    const shuffleShapes = () => {
        // Shuffles shapes from data to display randomized card on game board
        const shuffledShapes = [...GAME_DATA["shape-game"]]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        // Shuffles shapes from data again to randomize numbers for question
        const questionShapes = [...shuffledShapes].sort(
            () => Math.random() - 0.5
        );

        setShapes(shuffledShapes);
        setQuestions(questionShapes);
        setCorrect(0);
        setCompleted(false);
        setUserChoice(null);
    };

    // Set selected card to userChoice
    const handleChoice = (shape) => {
        setUserChoice(shape);
    };

    // Initiate game on load
    useEffect(() => {
        shuffleShapes();
    }, []);

    // Compare selected shape and question shape
    useEffect(() => {
        if (userChoice) {
            if (userChoice.type === question[correct].type) {
                setTimeout(() => {
                    playGameSound("correct");
                    resetTurn();
                    setCorrect((prevCorrect) => prevCorrect + 1);
                    setTimeout(() => {
                        if (correct === 7) {
                            setCompleted(true);
                            playGameSound("goodJob");
                        }
                    }, 700);
                }, 500);
            } else {
                setTimeout(() => {
                    playGameSound("wrong");
                    resetTurn();
                }, 500);
            }
        }
    }, [userChoice]);

    // Reset turn
    const resetTurn = () => {
        setUserChoice(null);
    };

    // Function to play sound
    const play = () => {
        new Audio(question[correct].audio).play();
    };

    const playGameSound = (sound) => {
        new Audio(GAME_DATA["game-data"][sound]).play();
    };

    // Play the sound automatically
    useEffect(() => {
        if (correct >= 0 && correct < 8) {
            setTimeout(() => {
                play();
            }, 1000);
        }
    }, [correct]);

    return (
        <GameBoard gameTitle={GAME_DATA["game-title"]["shape-game"]}>
            {completed ? (
                <EndScreen restart={shuffleShapes} />
            ) : (
                <>
                    <PlayButton onClick={play}>
                        <img
                            src={GAME_DATA["game-data"]["playButton"]}
                            alt="Play button"
                        />
                    </PlayButton>
                    <CardGrid>
                        {shapes.map((shape) => (
                            <SingleShapeCard
                                key={shape.id}
                                shape={shape}
                                handleChoice={handleChoice}
                                selected={shape === userChoice}
                            />
                        ))}
                    </CardGrid>
                </>
            )}
        </GameBoard>
    );
};

export default ShapeGame;

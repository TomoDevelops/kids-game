import { useEffect, useState } from "react";

import SingleNumCard from "../../components/number-game/SingleNumCard";
import EndScreen from "../../components/shared-components/EndScreen";
import GAME_DATA from "../../data/gameData";

import "./NumberGame.css";

const NumberGame = () => {
    const [numbers, setNumbers] = useState([]);
    const [userChoice, setUserChoice] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [correct, setCorrect] = useState(0);
    const [completed, setCompleted] = useState(false);

    // Shuffle game data
    const shuffleNumbers = () => {
        // Shuffles numbers from data to display randomized card on game board
        const shuffledNumbers = [...GAME_DATA["number-game"]]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        // Shuffles numbers from data again to randomize numbers for question
        const questionNumbers = [...shuffledNumbers].sort(
            () => Math.random() - 0.5
        );

        setNumbers(shuffledNumbers);
        setCurrentQuestion(questionNumbers);
        setCorrect(0);
        setCompleted(false);
        setUserChoice(null);
    };

    // Set selected card to userChoice
    const handleChoice = (number) => {
        setUserChoice(number);
    };

    useEffect(() => {
        shuffleNumbers();
    }, []);

    // Compare selected number and question number
    useEffect(() => {
        if (userChoice) {
            if (userChoice.type === currentQuestion[correct].type) {
                setTimeout(() => {
                    playGameSound("correct");
                    resetTurn();
                    setCorrect((prevCorrect) => prevCorrect + 1);
                    setTimeout(() => {
                        if (correct === 9) {
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
        new Audio(currentQuestion[correct].audio).play();
    };

    const playGameSound = (sound) => {
        new Audio(GAME_DATA["game-data"][sound]).play();
    };

    return (
        <div className="game-board">
            <h1>すうじ あて げーむ</h1>

            <button className="play-button" onClick={play}>
                <img
                    src={require(`../../assets/img/play.png`)}
                    alt="Play button"
                />
            </button>

            {completed ? (
                <EndScreen restart={shuffleNumbers} />
            ) : (
                <div className="card-grid">
                    {numbers.map((number) => (
                        <SingleNumCard
                            key={number.id}
                            number={number}
                            handleChoice={handleChoice}
                            selected={number === userChoice}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default NumberGame;

import { useEffect, useState } from "react";
import SingleCard from "../../components/memory-game/SingleCard";
import GAME_DATA from "../../data/gameData";
import EndScreen from "../../components/shared-components/EndScreen";

import "./MemoryGame.css";

const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [completed, setCompleted] = useState(false);

    // Shuffle Cards
    const shuffleCards = () => {
        const shuffledCards = [
            ...GAME_DATA["memory-game"],
            ...GAME_DATA["memory-game"],
        ]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
        setCompleted(false);
        setCorrect(0);
    };

    // Handle Choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    // compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setCorrect((prevCorrect) => prevCorrect + 1);
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
                if (correct === 5) {
                    setTimeout(() => {
                        new Audio(GAME_DATA["game-data"].goodJob).play();
                        setCompleted(true);
                    }, 700);
                }
            } else {
                setTimeout(() => {
                    resetTurn();
                }, 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((prevTurns) => prevTurns + 1);
        setDisabled(false);
        console.log(correct);
    };

    // start a new game automatically
    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div className="game-board">
            <h1>かーど あわせ げーむ</h1>

            {completed ? (
                <EndScreen restart={shuffleCards} />
            ) : (
                <>
                    <div className="card-grid">
                        {cards.map((card) => (
                            <SingleCard
                                key={card.id}
                                card={card}
                                handleChoice={handleChoice}
                                flipped={
                                    card === choiceOne ||
                                    card === choiceTwo ||
                                    card.matched
                                }
                                disabled={disabled}
                            />
                        ))}
                    </div>
                    <p>えらんだ かいすう: {turns}かい</p>
                </>
            )}
        </div>
    );
};

export default MemoryGame;

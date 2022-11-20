import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const CARD_IMG = [
    { src: require("./assets/img/dog.png"), matched: false },
    { src: require("./assets/img/cat.png"), matched: false },
    { src: require("./assets/img/bird.png"), matched: false },
    { src: require("./assets/img/dinosaur.png"), matched: false },
    { src: require("./assets/img/dolphin.png"), matched: false },
    { src: require("./assets/img/penguin.png"), matched: false },
];

function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    // Shuffle Cards
    const shuffleCards = () => {
        const shuffledCards = [...CARD_IMG, ...CARD_IMG]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
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
    };

    // start a new game automatically
    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div className="App">
            <h1>かーど あわせ げーむ</h1>
            <button onClick={shuffleCards}>はじめから</button>

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
        </div>
    );
}

export default App;

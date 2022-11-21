import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="Card front" />
                <img
                    className="back"
                    onClick={handleClick}
                    src={require("../../assets/img/card-back.png")}
                    alt="Card back"
                />
            </div>
        </div>
    );
};

export default SingleCard;

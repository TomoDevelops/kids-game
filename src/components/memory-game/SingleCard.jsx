import { Card, Front, Back } from "./SingleCard.styled";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <Card>
            <div className={flipped ? "flipped" : ""}>
                <Front src={card.src} alt="Card front" />
                <Back
                    onClick={handleClick}
                    src={require("../../assets/img/card-back.png")}
                    alt="Card back"
                />
            </div>
        </Card>
    );
};

export default SingleCard;

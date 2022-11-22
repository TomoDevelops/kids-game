import { NumCard } from "./SingleNumCard.styled";

const SingleNumCard = ({ number, handleChoice, selected }) => {
    const handleClick = () => {
        handleChoice(number);
    };
    return (
        <NumCard className={selected ? "selected" : ""}>
            <img src={number.img} onClick={handleClick} alt="Card number" />
        </NumCard>
    );
};

export default SingleNumCard;

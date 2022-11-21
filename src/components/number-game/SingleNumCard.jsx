import "./SingleNumCard.css";

const SingleNumCard = ({ number, handleChoice, selected }) => {
    const handleClick = () => {
        handleChoice(number);
    };
    return (
        <div className={`num-card ${selected ? `selected` : ``}`}>
            <img src={number.img} onClick={handleClick} alt="Card number" />
        </div>
    );
};

export default SingleNumCard;

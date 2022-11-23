import { ShapeCard } from "./SingleShapeCard.styled";

const SingleShapeCard = ({ shape, handleChoice, selected }) => {
    const handleClick = () => {
        handleChoice(shape);
    };
    return (
        <ShapeCard className={selected ? "selected" : ""}>
            <img src={shape.img} onClick={handleClick} alt="Card number" />
        </ShapeCard>
    );
};

export default SingleShapeCard;

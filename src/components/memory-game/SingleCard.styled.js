import styled from "styled-components";

export const Front = styled.img`
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
    position: absolute;
`;

export const Back = styled.img`
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
`;

export const Card = styled.div`
    position: relative;

    img {
        background: rgb(173, 233, 173);
        border: 2px solid #505050;
        border-radius: 8px;
        display: block;
        width: 100%;
    }

    .flipped ${Front} {
        transform: rotateY(0deg);
        transition-delay: 0.2s;
    }

    .flipped ${Back} {
        transform: rotateY(90deg);
        transition-delay: 0s;
    }
`;

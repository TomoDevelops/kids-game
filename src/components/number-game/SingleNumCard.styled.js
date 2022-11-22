import styled from "styled-components";

export const NumCard = styled.div`
    background-color: #ffdd55;
    border: 2px solid #262626;
    border-radius: 8px;
    height: 100px;
    padding: 10px;
    transition: all 0.2s ease-in;
    width: 100px;

    img {
        height: 100%;
        width: 100%;
    }

    &.selected {
        transform: scale(1.1);
    }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const GameLinks = styled.ul`
    align-items: center;
    display: flex;
    gap: 45px;
    flex-direction: column;
    margin-top: 75px;
`;

export const GameLink = styled(Link)`
    background: rgb(0, 110, 255);
    border-radius: 8px;
    list-style-type: none;
    padding: 15px 24px;
    width: 80%;
    color: #fff;
    font-size: 2.2rem;
    text-decoration: none;
`;

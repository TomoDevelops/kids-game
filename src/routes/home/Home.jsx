import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <ul className="game-links">
            <li className="game-link">
                <Link className="game" to="/memory-game">
                    かーど あわせ げーむ
                </Link>
            </li>

            <li className="game-link">
                <Link className="game" to="/number-game">
                    すうじ あて げーむ
                </Link>
            </li>

            <li className="game-link">
                <Link className="game" to="/memory-game">
                    きおく げーむ
                </Link>
            </li>

            <li className="game-link">
                <Link className="game" to="/memory-game">
                    かたち げーむ
                </Link>
            </li>

            <li className="game-link">
                <Link className="game" to="/memory-game">
                    えいご げーむ
                </Link>
            </li>
        </ul>
    );
};

export default Home;

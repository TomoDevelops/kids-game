const GAME_DATA = {
    "game-sound": [
        { type: "correct", audio: require("../assets/audio/correct.mp3") },
        { type: "wrong", audio: require("../assets/audio/wrong.mp3") },
    ],
    "memory-game": [
        { src: require("../assets/img/dog.png"), matched: false },
        { src: require("../assets/img/cat.png"), matched: false },
        { src: require("../assets/img/bird.png"), matched: false },
        { src: require("../assets/img/dinosaur.png"), matched: false },
        { src: require("../assets/img/dolphin.png"), matched: false },
        { src: require("../assets/img/penguin.png"), matched: false },
    ],
    "number-game": [
        {
            type: "one",
            img: require("../assets/img/one.png"),
            audio: require("../assets/audio/one.mp3"),
            matched: false,
        },
        {
            type: "two",
            img: require("../assets/img/two.png"),
            audio: require("../assets/audio/two.mp3"),
            matched: false,
        },
        {
            type: "three",
            img: require("../assets/img/three.png"),
            audio: require("../assets/audio/three.mp3"),
            matched: false,
        },
        {
            type: "four",
            img: require("../assets/img/four.png"),
            audio: require("../assets/audio/four.mp3"),
            matched: false,
        },
        {
            type: "five",
            img: require("../assets/img/five.png"),
            audio: require("../assets/audio/five.mp3"),
            matched: false,
        },
        {
            type: "six",
            img: require("../assets/img/six.png"),
            audio: require("../assets/audio/six.mp3"),
            matched: false,
        },
        {
            type: "seven",
            img: require("../assets/img/seven.png"),
            audio: require("../assets/audio/seven.mp3"),
            matched: false,
        },
        {
            type: "eight",
            img: require("../assets/img/eight.png"),
            audio: require("../assets/audio/eight.mp3"),
            matched: false,
        },
        {
            type: "nine",
            img: require("../assets/img/nine.png"),
            audio: require("../assets/audio/nine.mp3"),
            matched: false,
        },
        {
            type: "ten",
            img: require("../assets/img/ten.png"),
            audio: require("../assets/audio/ten.mp3"),
            matched: false,
        },
    ],
};

export default GAME_DATA;

import Game from "./src/game.js";

const game = new Game();

window.game = game; //добавляем объект game глобальный объект window

console.log(game);

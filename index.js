import Game from "./src/game.js";
import View from "./src/view.js";

const root = document.querySelector("#root");

const game = new Game();
const view = new View(root, 480, 640, 20, 10);

window.game = game; //добавляем объект game глобальный объект window
window.view = view;

document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 65: //LEFT ARROW
      game.movePieceLeft();
      view.renderMainScreen(game.getState());
      break;
    case 87: //UP ARROW
      game.rotatePiece();
      view.renderMainScreen(game.getState());
      break;
    case 68: //RIGHT ARROW
      game.movePieceRight();
      view.renderMainScreen(game.getState());
      break;
    case 83: // DOWN ARROW
      game.movePieceDown();
      view.renderMainScreen(game.getState());
      break;
  }
});

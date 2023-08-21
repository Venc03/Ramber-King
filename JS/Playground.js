import Cars from "./Cars.js";
import { MathematicalSigns } from "./data.js";
import Menu from "./Menu.js";



$(function(){
  new Playground(); 
});



class Playground {
  constructor() {
    this.player = new Cars(0);
    this.bot = new Cars(0);
    this.error = 0;
    this.Rounds();
    this.botTimer = setInterval(() => {
      this.moveBot();
    }, 5000);
  }

  resetBotTimer() {
    clearInterval(this.botTimer);
    this.botTimer = setInterval(() => {
      this.moveBot();
    }, 5000);
  }

  Rounds() {
    if (this.player.getPosition() >= 10) {
      this.showGameOver("<div class='end'>VICTORY<br>Great job with counting. You got " + this.error + " wrong awnser.</div>");
      return;
    }

    if (this.bot.getPosition() >= 10) {
      this.showGameOver("<div class='end'>DEFEAT<br>Better luck next time, study harder. You got " + this.player.getPosition() + " right awnser.</div>");
      return;
    }

    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let rnd = Math.floor(Math.random() * 3);
    let sign = MathematicalSigns[rnd.toString()];
    let result;

    if (sign === "+") {
      result = a + b;
    } else if (sign === "-") {
      result = a - b;
    } else if (sign === "*") {
      result = a * b;
    }

    const MP = $(".MP");
    let txt = `<div class="pg">`;
    txt += `<h1 class="pgh">Ramber King</h1>`;

    txt += `<br>`;
    txt += `<table class="ptable">`;
    txt += `<tr class="p">`;

    for (let i = 0; i < 10; i++) {
      txt += `<td>`;
      if (this.player.getPosition() === i) {
        txt += `<img src="../PIC/playercar.png">`;
      }
      txt += `</td>`;
    }

    txt += `</tr>`;
    txt += `<tr class="b">`;

    for (let y = 0; y < 10; y++) {
      txt += `<td>`;
      if (this.bot.getPosition() === y) {
        txt += `<img src="../PIC/botcar.png">`;
      }
      txt += `</td>`;
    }

    txt += `</tr>`;
    txt += `</table>`;
    txt += `<form class="pgf">`;
    txt += `<label for="question"> What does `;
    txt += a;
    txt += ` `;
    txt += sign;
    txt += ` `;
    txt += b;
    txt += ` Equals?</label>`;
    txt += `<br><input type="number" id="player_a" required>`;
    txt += `<br>`;
    txt += `<button class="button_as">AWNSER</button>`;
    txt += `</form>`;
    txt += `</div>`;

    MP.html(txt);

    $(".button_as").on("click", (event) => {
      event.preventDefault();
      let playerAnswer = parseInt($("#player_a").val());
      if (playerAnswer === result) {
        this.player.setPosition(this.player.getPosition() + 1);
        this.resetBotTimer();
      } else {
        this.error++;
      }
      this.Rounds();
    });
  }

  moveBot() {
    if (this.bot.getPosition() < 10) {
      this.bot.setPosition(this.bot.getPosition() + 1);
    }
    this.Rounds();
  }

  showGameOver(message) {
    const MP = $(".MP");
    let txt = `<div class="endd"><h1 class="endh">Game Over</h1><p>${message}</p>`;
    txt += `<button class="button_r">RESTART</button>`;
    txt += `<button class="button_m">MENU</button></div>`;
    MP.html(txt);

    $(".button_r").on("click", () => {
      this.restartGame();
    });

    $(".button_m").on("click", () => {
        window.location.href = "../HTML/index.html";
        new Menu();
    });
  }

  restartGame() {
    this.player.setPosition(0);
    this.bot.setPosition(0);
    clearInterval(this.botTimer);
    this.botTimer = setInterval(() => {
      this.moveBot();
    }, 5000);
    this.Rounds();
  }
}

export default Playground;

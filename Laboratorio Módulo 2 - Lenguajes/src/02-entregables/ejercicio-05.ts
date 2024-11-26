console.log("************** DELIVERABLE 05 *********************");

// 5. Slot machine

const generateRandomBoolean = () => Math.random() >= 0.5;

class SlotMachine {
  coins = 0;
  booleans = [];

  play() {
    this.booleans = [];
    this.coins++;
    for (let i = 0; i < 2; i++) {
      this.booleans.push(generateRandomBoolean());
    }

    const allTrue = this.booleans.every((boolean) => boolean === true);

    const areAllTrue = allTrue
      ? `Congratulations!!! You won ${this.coins} coin${
          this.coins > 1 ? "s" : ""
        }!!`
      : "Good luck next time!!";

    console.log(areAllTrue);
    if (allTrue) {
      this.coins = 0;
    }
  }
}

const machine1 = new SlotMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

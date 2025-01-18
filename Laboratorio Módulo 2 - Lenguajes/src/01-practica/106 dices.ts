console.log("#Dices");

type DiceGame = {
  reset: () => void;
  getDices: () => void;
  checkResult: () => void;
  checkDices: () => void;
};

const playDices = (): DiceGame => {
  let dice1: number | undefined, dice2: number | undefined;

  const random = (): number => Math.floor(Math.random() * 6 + 1);

  return {
    reset: (): void => {
      dice1 = undefined;
      dice2 = undefined;
      console.log("Dices' values are reset!");
    },
    getDices: (): void => {
      dice1 = random();
      dice2 = random();
      console.log("You have rolled the dices!");
    },
    checkResult: (): void => {
      if (dice1 === 6 && dice2 === 6) {
        console.log("Congrats! You've got 2 sixs :)");
      } else {
        console.log(
          `You've got ${dice1} and ${dice2}. Reset the game and try again!`
        );
      }
    },
    checkDices: (): void => {
      console.log(`Current dices values: ${dice1}, ${dice2}`);
    },
  };
};

const game = playDices();

game.getDices();
game.checkDices();
game.getDices();
game.checkResult();
game.reset();
game.getDices();
game.checkResult();

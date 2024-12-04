console.log("#Dices");

const playDices = () => {
    let dice1, dice2;
  
    const random = () => Math.floor(Math.random() * 6 + 1);
  
    return {
      reset: () => {
        dice1 = undefined;
        dice2 = undefined;
        console.log("Dices' values are reset!");
      },
      getDices: () => {
        dice1 = random();
        dice2 = random();
        console.log('You have rolled the dices!');
      },
      checkResult: () => {
        if (dice1 === 6 && dice2 === 6) {
          console.log("Congrats! You've got 2 sixs :)");
        } else {
          console.log(
            `You've got ${dice1} and ${dice2}. Reset the game and try again!`
          );
        }
      },
      checkDices: () => {
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
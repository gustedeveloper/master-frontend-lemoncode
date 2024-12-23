console.log("#Players order");

const getPlayersOrder = (players, turns) => {
  for (let i = 0; i < turns; i++) {
    players = [...players.slice(1, players.length), players[0]];
  }
  return players;
};

const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

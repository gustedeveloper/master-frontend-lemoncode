console.log("#Players order");

const getPlayersOrder = (players: string[], turns: number): string[] => {
  for (let i = 0; i < turns; i++) {
    players = [...players.slice(1, players.length), players[0]];
  }
  return players;
};

const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

const getPlayersOrderWithReminder = (
  players: string[],
  turns: number
): string[] => {
  const offset = turns % players.length;
  return [...players.slice(offset), ...players.slice(0, offset)];
};

const newOrderInXTurns = getPlayersOrderWithReminder(
  ["Ana", "Juan", "Pablo", "Lucia"],
  7
);
console.log(newOrderInXTurns);

const getPlayersOrderWithDestructuring = (
  players: string[],
  turns: number
): string[] => {
  const offset = turns % players.length;

  const [start, ...rest] = [
    ...players.slice(offset),
    ...players.slice(0, offset),
  ];

  return [start, ...rest];
};

const newOrderUsingDestructuring = getPlayersOrderWithDestructuring(
  ["Ana", "Juan", "Pablo", "Lucia"],
  6
);

console.log(newOrderUsingDestructuring);

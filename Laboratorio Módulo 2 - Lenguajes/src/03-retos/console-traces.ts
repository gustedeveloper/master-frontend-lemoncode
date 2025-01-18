console.log("************** CHALLENGES *********************");

const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]: [
  number,
  string
]): Promise<void> => {
  await delay(time);
  console.log(message);
};

const triggers: Array<() => Promise<void>> = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers: Array<() => Promise<void>>): Promise<void> => {
  for (const trigger of triggers) {
    await trigger();
  }
  console.log("first");
};

run(triggers);

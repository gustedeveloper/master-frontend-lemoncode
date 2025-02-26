import { CharacterApi } from "./characters-ram.api-model";

export const getCharactersCollection = (): Promise<CharacterApi[]> =>
  fetch(`https://rickandmortyapi.com/api/character`).then((response) =>
    response.json()
  );

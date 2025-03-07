import { CharacterApi } from "./characters-ram.api-model";

export const getCharactersCollection = (): Promise<CharacterApi[]> => {
  const randomPage = Math.floor(Math.random() * 42) + 1;
  return fetch(`https://rickandmortyapi.com/api/character?page=${randomPage}`)
    .then((response) => response.json())
    .then((data) => data.results);
};

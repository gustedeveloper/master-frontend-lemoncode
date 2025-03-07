import { CharacterApi } from "./characters-ram.api-model";

export const getCharactersCollection = (
  page: number
): Promise<CharacterApi[]> => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((response) => response.json())
    .then((data) => data.results);
};

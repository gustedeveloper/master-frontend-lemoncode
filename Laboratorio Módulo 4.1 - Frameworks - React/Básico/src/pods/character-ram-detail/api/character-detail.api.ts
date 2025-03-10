import { CharacterApi } from "./character-detail.api-model";

export const getCharacterDetail = (id: string): Promise<CharacterApi> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => data);
};

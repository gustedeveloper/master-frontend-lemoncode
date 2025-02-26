import * as vm from "./characters-ram.vm";
import * as api from "./api/characters-ram.api-model";

export const mapCharacterFromApiToVm = (
  character: api.CharacterApi
): vm.CharacterVm => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: {
    name: character.origin.name,
  },
  currentLocation: {
    name: character.location.name,
  },
  image: character.image,
});

export const mapCharacterCollectionFromApiToVm = (
  charactersCollecion: api.CharacterApi[]
): vm.CharacterVm[] =>
  charactersCollecion.map((character) => mapCharacterFromApiToVm(character));

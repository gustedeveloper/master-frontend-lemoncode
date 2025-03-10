import * as vm from "./character-detail.vm";
import * as api from "./api/character-detail.api-model";

export const mapCharacterFromApiToVm = (
  character: api.CharacterApi
): vm.CharacterDetailVm => ({
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

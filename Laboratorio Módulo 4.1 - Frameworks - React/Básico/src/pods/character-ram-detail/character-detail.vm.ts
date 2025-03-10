export interface CharacterDetailVm {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  currentLocation: {
    name: string;
  };
  image: string;
}

export const createDefaultCharacterVM = () => ({
  id: "",
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: {
    name: "",
  },
  currentLocation: {
    name: "",
  },
  image: "",
});

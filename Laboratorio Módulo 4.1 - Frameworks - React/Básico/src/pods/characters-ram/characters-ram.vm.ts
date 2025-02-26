export interface CharacterVm {
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

import React, { useEffect, useState } from "react";
import { CharacterVm } from "./characters-ram.vm";
import { getCharactersCollection } from "./api/characters-ram.api";
import { mapCharacterCollectionFromApiToVm } from "./characters-ram.mapper";
import { CharactersRAMComponent } from "./characters-ram.component";

export const CharactersRAMContainer: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterVm[]>([]);

  useEffect(() => {
    getCharactersCollection().then((apiCharacters) => {
      const mappedCharacters = mapCharacterCollectionFromApiToVm(apiCharacters);
      setCharacters(mappedCharacters);
    });
  }, []);

  return <CharactersRAMComponent characters={characters} />;
};

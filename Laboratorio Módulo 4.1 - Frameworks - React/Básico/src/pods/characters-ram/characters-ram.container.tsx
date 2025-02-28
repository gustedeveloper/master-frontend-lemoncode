import React, { useEffect, useState } from "react";
import { CharacterVm } from "./characters-ram.vm";
import { getCharactersCollection } from "./api/characters-ram.api";
import { mapCharacterCollectionFromApiToVm } from "./characters-ram.mapper";
import { CharactersRAMComponent } from "./characters-ram.component";

export const CharactersRAMContainer: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterVm[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterVm[]>(
    []
  );
  const [value, setValue] = useState("");

  const handleSearchButton = () => {
    const formattedValue = value.toLowerCase();
    const formattedFilteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(formattedValue)
    );

    setFilteredCharacters(formattedFilteredCharacters);
  };

  useEffect(() => {
    getCharactersCollection().then((apiCharacters) => {
      const mappedCharacters = mapCharacterCollectionFromApiToVm(apiCharacters);
      setCharacters(mappedCharacters);
      setFilteredCharacters(mappedCharacters);
    });
  }, []);

  return (
    <CharactersRAMComponent
      value={value}
      setValue={setValue}
      handleSearchButton={handleSearchButton}
      filteredCharacters={filteredCharacters}
    />
  );
};

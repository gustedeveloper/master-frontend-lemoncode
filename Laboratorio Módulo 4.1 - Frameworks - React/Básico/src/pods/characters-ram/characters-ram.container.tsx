import React, { useEffect, useState } from "react";
import { CharacterVm } from "./characters-ram.vm";
import { getCharactersCollection } from "./api/characters-ram.api";
import { mapCharacterCollectionFromApiToVm } from "./characters-ram.mapper";
import { CharactersRAMComponent } from "./characters-ram.component";
import { useDebounce } from "use-debounce";

export const CharactersRAMContainer: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterVm[]>([]);

  const [value, setValue] = useState("");

  const formattedValue = value.toLowerCase();

  const [debouncedValue] = useDebounce(formattedValue, 700);

  useEffect(() => {
    getCharactersCollection().then((apiCharacters) => {
      const mappedCharacters = mapCharacterCollectionFromApiToVm(apiCharacters);
      setCharacters(mappedCharacters);
    });
  }, []);

  const debouncedFilteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(debouncedValue)
  );

  return (
    <CharactersRAMComponent
      value={value}
      setValue={setValue}
      characters={debouncedFilteredCharacters}
    />
  );
};

import React from "react";
import { CharacterVm } from "./characters-ram.vm";

interface Props {
  characters: CharacterVm[];
}

export const CharactersRAMComponent: React.FC<Props> = (props) => {
  const { characters } = props;
  return (
    <>
      <div>
        {characters.map((character) => (
          <div>{character.name}</div>
        ))}
      </div>
    </>
  );
};

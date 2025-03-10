import React, { FC } from "react";
import { CharacterDetailVm } from "./character-detail.vm";

interface CharacterDetailProps {
  character: CharacterDetailVm;
  id: string;
}

export const CharacterDetailComponent: FC<CharacterDetailProps> = (props) => {
  const { character, id } = props;

  return (
    <>
      <h1>I'm the character number {id}</h1>
      <p>Name: {character.name}</p>
    </>
  );
};

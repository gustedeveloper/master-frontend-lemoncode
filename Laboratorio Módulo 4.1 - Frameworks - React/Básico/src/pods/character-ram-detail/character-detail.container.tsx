import React, { FC, useEffect, useState } from "react";
import { CharacterDetailComponent } from "./character-detail.component";
import {
  CharacterDetailVm,
  createDefaultCharacterVM,
} from "./character-detail.vm";
import { useParams } from "react-router-dom";

export const CharacterDetailContainer: FC = () => {
  const [character, setCharacter] = useState<CharacterDetailVm>(
    createDefaultCharacterVM()
  );

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(json));
  }, []);

  return <CharacterDetailComponent character={character} id={id} />;
};

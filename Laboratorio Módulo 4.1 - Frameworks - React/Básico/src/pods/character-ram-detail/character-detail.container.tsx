import React, { FC, useEffect, useState } from "react";
import { CharacterDetailComponent } from "./character-detail.component";
import {
  CharacterDetailVm,
  createDefaultCharacterVM,
} from "./character-detail.vm";
import { useParams } from "react-router-dom";
import { getCharacterDetail } from "./api/character-detail.api";
import { mapCharacterFromApiToVm } from "./character-detail.mapper";

export const CharacterDetailContainer: FC = () => {
  const [character, setCharacter] = useState<CharacterDetailVm>(
    createDefaultCharacterVM()
  );

  const { id } = useParams();

  useEffect(() => {
    getCharacterDetail(id).then((apiCharacter) => {
      const mappedCharacter = mapCharacterFromApiToVm(apiCharacter);
      setCharacter(mappedCharacter);
    });
  }, []);

  return <CharacterDetailComponent character={character} />;
};

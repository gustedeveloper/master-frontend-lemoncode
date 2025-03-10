import React, { FC } from "react";
import { CharacterDetailVm } from "./character-detail.vm";
import { Typography } from "@mui/material";

interface CharacterDetailProps {
  character: CharacterDetailVm;
  id: string;
}

export const CharacterDetailComponent: FC<CharacterDetailProps> = (props) => {
  const { character, id } = props;

  return (
    <>
      <h1>I'm the character number {id}</h1>
      <Typography sx={{ fontWeight: "bold" }}>Last known location:</Typography>
      <Typography sx={{ mb: 1.25 }}>
        {character.currentLocation.name}
      </Typography>

      <Typography sx={{ fontWeight: "bold" }}>First seen in:</Typography>
      <Typography>{character.origin.name}</Typography>
    </>
  );
};

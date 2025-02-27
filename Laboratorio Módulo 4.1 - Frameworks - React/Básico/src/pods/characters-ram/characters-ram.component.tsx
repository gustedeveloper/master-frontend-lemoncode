import React from "react";
import { CharacterVm } from "./characters-ram.vm";
import { Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";

interface Props {
  characters: CharacterVm[];
}

export const CharactersRAMComponent: React.FC<Props> = (props) => {
  const { characters } = props;
  return (
    <>
      <Grid2
        container
        spacing={5}
        sx={{
          justifyContent: "center",
          margin: {
            xs: "64px 16px",
            sm: "32px",
            md: "48px",
            lg: "64px",
            xl: "80px",
          },
        }}
      >
        {characters.map((character) => (
          <Card
            sx={{
              width: "600px",
              height: "200px",
              borderRadius: "5px",
              display: "flex",
              bgcolor: "#8d99ae",
            }}
            key={character.id}
          >
            <CardMedia
              component="img"
              sx={{ width: 200, borderRadius: "5px 0px 0px 5px" }}
              image={character.image}
              alt={character.name}
            ></CardMedia>
            <CardContent
              sx={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography variant="h2" sx={{ color: "white" }}>
                {character.name}
              </Typography>
              <Typography sx={{ color: "white", fontWeight: "bold", mb: 1.25 }}>
                {character.status} - {character.species}
              </Typography>

              <Typography sx={{ color: "#B9CAE7", fontWeight: "bold" }}>
                Last known location:
              </Typography>
              <Typography sx={{ color: "white", mb: 1.25 }}>
                {character.currentLocation.name}
              </Typography>

              <Typography sx={{ color: "#B9CAE7", fontWeight: "bold" }}>
                First seen in:
              </Typography>
              <Typography sx={{ color: "white" }}>
                {character.origin.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid2>
    </>
  );
};

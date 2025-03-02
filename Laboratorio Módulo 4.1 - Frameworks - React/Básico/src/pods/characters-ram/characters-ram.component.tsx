import React from "react";
import { CharacterVm } from "./characters-ram.vm";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSearchButton: () => void;
  filteredCharacters: CharacterVm[];
}

export const CharactersRAMComponent: React.FC<Props> = (props) => {
  const { value, setValue, handleSearchButton, filteredCharacters } = props;
  return (
    <>
      <Grid2
        container
        spacing={5}
        sx={{
          margin: {
            xs: "64px 16px",
            sm: "32px",
            md: "48px",
            lg: "64px",
            xl: "80px",
          },
        }}
      >
        <Grid2 size={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Grid2 container spacing={2}>
            <Grid2 size={8.5}>
              <TextField
                id="filled-basic"
                label="Enter character"
                variant="filled"
                value={value}
                fullWidth
                onChange={(e) => setValue(e.target.value)}
              />
            </Grid2>

            <Grid2 size={3.5} sx={{ display: "flex" }}>
              <Button variant="contained" onClick={handleSearchButton}>
                Search
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2
          size={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "space-evenly",
          }}
        >
          {filteredCharacters.map((character) => (
            <Grid2 container key={character.id}>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Card
                  sx={{
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },
                    width: {
                      xs: "300px",
                      md: "550px",
                    },
                    height: {
                      xs: "530px",
                      md: "200px",
                    },
                    borderRadius: "5px",
                    display: "flex",
                    bgcolor: "#8d99ae",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: {
                        sx: 300,
                        md: 200,
                      },
                      borderRadius: {
                        sx: "0px 5px 5px 0px",
                        md: "5px 0px 0px 5px",
                      },
                    }}
                    image={character.image}
                    alt={character.name}
                  ></CardMedia>
                  <CardContent
                    sx={{
                      display: "flex",
                      flex: "1 0 auto",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h3" sx={{ color: "white" }}>
                      {character.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                        mb: 1.25,
                      }}
                    >
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
              </Grid2>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </>
  );
};

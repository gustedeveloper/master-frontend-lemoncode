import React, { FC } from "react";
import { CharacterDetailVm } from "./character-detail.vm";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CharacterDetailProps {
  character: CharacterDetailVm;
}

export const CharacterDetailComponent: FC<CharacterDetailProps> = (props) => {
  const { character } = props;

  const navigate = useNavigate();

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          height: 700,
          borderRadius: 5,
        }}
      >
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{ width: 300, height: 300, borderRadius: "0px 5px 5px 0px" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flex: "1 0 auto",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h2">{character.name}</Typography>
          <Typography>
            <strong>Status: </strong>
            {character.status}
          </Typography>
          <Typography>
            <strong>Species: </strong>
            {character.species}
          </Typography>
          <Typography>
            {character.type && (
              <>
                <strong>Type: </strong>
                {character.type}
              </>
            )}
          </Typography>
          <Typography>
            <strong>Gender: </strong>
            {character.gender}
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            Last known location:
          </Typography>
          <Typography sx={{ mb: 1.25 }}>
            {character.currentLocation.name}
          </Typography>

          <Typography sx={{ fontWeight: "bold" }}>First seen in:</Typography>
          <Typography>{character.origin.name}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate(`/characters`)}
          >
            Go back to list
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

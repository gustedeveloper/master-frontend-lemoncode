import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MemberEntity } from "./detail.vm";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

interface Props {
  selectedMember: MemberEntity;
  organization: string;
  id: string;
}

export const DetailComponent: FC<Props> = (props) => {
  const { selectedMember, organization, id } = props;
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
          width: 325,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "32px",
        }}
      >
        <CardMedia
          sx={{
            height: 150,
            width: 150,
            borderRadius: "50%",
          }}
          image={selectedMember.avatar_url}
        />

        <CardContent>
          <Typography variant="h4">Organization: {organization}</Typography>
          <h3>Username: {id}</h3>
          <CardActions>
            <Button variant="contained" onClick={() => navigate("/list")}>
              Back to list
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Container>
  );
};

import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const HomeComponent: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          maxWidth: "1200px",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "150px",
          gap: "50px",
          "& > :not(style)": {
            width: {
              xs: 300,
              sm: 400,
            },
            height: {
              xs: 200,
              sm: 300,
            },
          },
        }}
      >
        <Card
          sx={{
            position: "relative",
            overflow: "hidden",
            transition: "opacity 0.7s",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          <CardActionArea onClick={() => navigate("/city-category")}>
            <CardMedia
              component="img"
              image="../src/assets/city/city1.jpg"
              sx={{
                height: {
                  xs: 200,
                  sm: 300,
                },
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              City Category
            </Typography>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            transition: "opacity 0.7s",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          <CardActionArea onClick={() => navigate("/landscape-category")}>
            <CardMedia
              component="img"
              sx={{
                height: {
                  xs: 200,
                  sm: 300,
                },
              }}
              image="../src/assets/landscapes/landscape3.jpg"
            />
            <Typography
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              Nature Category
            </Typography>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
};

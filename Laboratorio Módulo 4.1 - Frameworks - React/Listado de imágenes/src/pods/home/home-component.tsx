import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Category {
  name: string;
  path: string;
  img: string;
}

const pages: Category[] = [
  {
    name: "City category",
    path: "/city-category",
    img: "../src/assets/city/city1.jpg",
  },
  {
    name: "Nature category",
    path: "/landscape-category",
    img: "../src/assets/landscapes/landscape3.jpg",
  },
];

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
        {pages.map((page) => (
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
            <CardActionArea onClick={() => navigate(page.path)}>
              <CardMedia
                component="img"
                image={page.img}
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
                  fontWeight: "lighter",
                }}
              >
                {page.name}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    </>
  );
};

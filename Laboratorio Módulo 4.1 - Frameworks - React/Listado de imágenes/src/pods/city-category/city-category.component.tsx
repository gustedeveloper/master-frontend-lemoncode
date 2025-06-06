import { FC, useState } from "react";
import { PictureInfoVm } from "./city.vm";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  pictures: PictureInfoVm[];
  handleCheckBox: (id: string) => void;
}

export const CityCategoryComponent: FC<Props> = React.memo((props) => {
  const { pictures, handleCheckBox } = props;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Grid2
      container
      sx={{
        justifyContent: "center",
        margin: {
          xs: "150px 0px",
          md: "0px",
        },
      }}
    >
      <Typography variant="h3" sx={{ p: "20px 0px" }}>
        City Category
      </Typography>
      <Grid2
        size={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {pictures.map((picture) => (
          <Grid2 container key={picture.id}>
            <Grid2>
              <Card
                sx={{
                  width: {
                    xs: "300px",
                    md: "400px",
                  },
                  height: {
                    xs: "200px",
                    md: "300px",
                  },
                  position: "relative",
                  objectFit: "cover",
                }}
                onMouseEnter={() => setHoveredId(picture.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={picture.picUrl}
                    alt={picture.title}
                    sx={{
                      objectFit: "cover",
                      height: {
                        xs: "200px",
                        md: "300px",
                      },
                    }}
                  ></CardMedia>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0))",
                      color: "white",
                      padding: "10px 20px",
                      opacity: hoveredId === picture.id ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      textAlign: "flex-start",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={picture.selected}
                          onChange={() => handleCheckBox(picture.id)}
                          color="secondary"
                          sx={{ color: "white" }}
                        />
                      }
                      label="Buy"
                    />
                    <Typography>{picture.title}</Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
});

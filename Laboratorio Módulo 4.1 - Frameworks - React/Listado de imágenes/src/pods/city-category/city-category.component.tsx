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

interface Props {
  pictures: PictureInfoVm[];
  handleCheckBox: (id: string) => void;
}

export const CityCategoryComponent: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Grid2 container>
      <Typography variant="h3" sx={{ p: "20px 0px" }}>
        City Category
      </Typography>
      <Grid2 size={12} sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {pictures.map((picture) => (
          <Grid2 container key={picture.id}>
            <Grid2 size={{ xs: 12, sm: 4, md: 4, lg: 3 }}>
              <Card
                sx={{
                  width: {
                    xs: "200px",
                    md: "400px",
                  },
                  height: {
                    xs: "150px",
                    md: "300px",
                  },
                  position: "relative",
                }}
                onMouseEnter={() => setHoveredId(picture.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={picture.picUrl}
                    alt={picture.title}
                    sx={{
                      objectFit: "cover",
                      height: {
                        xs: "150px",
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
};

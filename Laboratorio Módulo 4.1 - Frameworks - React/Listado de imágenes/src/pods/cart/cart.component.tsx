import { FC } from "react";
import { PictureInfo } from "../../core/model";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

interface Props {
  cartPictures: PictureInfo[];
  deleteFromCart: (id: string) => void;
}

export const CartComponent: FC<Props> = (props) => {
  const { cartPictures, deleteFromCart } = props;

  return (
    <Grid2 container>
      <Typography variant="h3" sx={{ p: "20px 0px" }}>
        Shopping Cart
      </Typography>
      <Grid2
        size={12}
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {cartPictures.map((picture) => (
          <Grid2 container key={picture.id}>
            <Grid2 sx={{ display: "flex" }}>
              <Card sx={{ width: "130px" }}>
                <CardMedia
                  component="img"
                  image={picture.picUrl}
                  alt={picture.title}
                ></CardMedia>
              </Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardContent sx={{ p: "5px 20px" }}>
                  <Typography sx={{ fontSize: "12px" }}>
                    {picture.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ ml: "20px" }}
                    onClick={() => deleteFromCart(picture.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Box>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
};

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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface Props {
  cartPictures: PictureInfo[];
  deleteFromCart: (id: string) => void;
}

export const CartComponent: FC<Props> = (props) => {
  const { cartPictures, deleteFromCart } = props;

  return (
    <Grid2 container>
      <Grid2 sx={{ p: "20px 0px" }}>
        <Button variant="contained">
          <ShoppingCartIcon />
        </Button>
      </Grid2>
      <Grid2
        size={12}
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {cartPictures.map((picture) => (
          <Grid2 container key={picture.id}>
            <Grid2
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
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
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardContent sx={{ p: "5px 15px" }}>
                  <Typography sx={{ fontSize: "12px" }}>
                    {picture.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <DeleteForeverIcon
                    color="primary"
                    onClick={() => deleteFromCart(picture.id)}
                    sx={{ cursor: "pointer" }}
                  ></DeleteForeverIcon>
                </CardActions>
              </Box>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
};

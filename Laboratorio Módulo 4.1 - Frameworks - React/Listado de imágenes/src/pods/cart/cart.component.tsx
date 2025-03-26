import { FC, useContext } from "react";
import { PictureInfo } from "../../core/model";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Drawer,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { PicturesContext } from "../../core/context/pictures-context";

interface Props {
  cartPictures: PictureInfo[];
  deleteFromCart: (id: string) => void;
}

export const CartComponent: FC<Props> = (props) => {
  const { cartPictures, deleteFromCart } = props;
  const { drawer, handleDrawerClose } = useContext(PicturesContext);

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={drawer}
      onClose={handleDrawerClose}
    >
      <Grid2
        container
        sx={{
          display: "flex",
          width: {
            xs: "160px",
            sm: "300px",
            md: "400px",
          },
        }}
      >
        <Grid2 size={12}>
          <IconButton onClick={handleDrawerClose} sx={{ p: "5px", m: "15px" }}>
            <ChevronRightIcon />
          </IconButton>
        </Grid2>

        <Grid2
          size={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            p: " 0px 15px",
          }}
        >
          <Divider />

          {cartPictures.length === 0 ? (
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "14px",
                p: "20px",
                color: "gray",
              }}
            >
              Your shopping cart is empty 🛒
            </Typography>
          ) : (
            cartPictures.map((picture) => (
              <Grid2
                container
                key={picture.id}
                sx={{ justifyContent: "center" }}
              >
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
                      width: "150px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: {
                        xs: "column",
                        md: "row",
                      },
                      alignItems: "center",
                    }}
                  >
                    <CardContent sx={{ p: "5px 15px" }}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {picture.title}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        p: {
                          xs: "0px",
                        },
                      }}
                    >
                      <DeleteForeverIcon
                        color="primary"
                        onClick={() => deleteFromCart(picture.id)}
                        sx={{
                          cursor: "pointer",
                        }}
                      ></DeleteForeverIcon>
                    </CardActions>
                  </Box>
                </Grid2>
              </Grid2>
            ))
          )}
        </Grid2>
      </Grid2>
    </Drawer>
  );
};

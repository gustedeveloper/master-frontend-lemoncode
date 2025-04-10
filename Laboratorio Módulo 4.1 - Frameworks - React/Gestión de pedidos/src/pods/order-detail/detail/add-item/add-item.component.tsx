import { FC } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Item } from "@/core/model";

interface Props {
  showNewItemForm: boolean;
  setShowNewItemForm: (value: boolean) => void;
  item: Item;
  setItem: (item: Item) => void;
  addItem: () => void;
}

export const AddItemComponent: FC<Props> = (props) => {
  const { showNewItemForm, setShowNewItemForm, item, setItem, addItem } = props;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: "0px 0px 40px 15px",
          gap: "15px",
        }}
      >
        <Collapse in={showNewItemForm}>
          <Box
            sx={{
              display: "flex",
              alignItems: {
                xs: "flex-start",
                sm: "center",
              },
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: "15px",
              p: "15px 0px",
            }}
          >
            <TextField
              variant="standard"
              type="text"
              label="Description"
              sx={{
                width: {
                  xs: "350px",
                  sm: "500px",
                },
                mr: "20px",
              }}
              value={item.description}
              onChange={(e) =>
                setItem({
                  ...item,
                  description: e.target.value,
                })
              }
            ></TextField>
            <TextField
              variant="standard"
              type="number"
              label="Amount"
              sx={{ width: "200px" }}
              value={item.amount === 0 ? "" : item.amount}
              onChange={(e) =>
                setItem({
                  ...item,
                  amount: parseFloat(e.target.value),
                })
              }
            />

            <Button variant="contained" onClick={addItem} sx={{ mt: "20px" }}>
              Add new item
            </Button>
          </Box>
        </Collapse>

        <Box sx={{ display: "flex", alignItems: " center" }}>
          <IconButton onClick={() => setShowNewItemForm(!showNewItemForm)}>
            <AddCircleOutlineIcon color="primary" />
          </IconButton>
          <Typography>{showNewItemForm ? "Close" : "Add new item"}</Typography>
        </Box>
      </Box>
    </>
  );
};

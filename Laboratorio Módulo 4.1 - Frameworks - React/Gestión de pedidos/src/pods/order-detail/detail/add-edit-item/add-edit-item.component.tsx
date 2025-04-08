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

interface Props {
  showNewItemForm: boolean;
  setShowNewItemForm: (value: boolean) => void;
}

export const AddEditItemComponent: FC<Props> = (props) => {
  const { showNewItemForm, setShowNewItemForm } = props;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: "15px",
          gap: "15px",
        }}
      >
        <Collapse in={showNewItemForm}>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              mt: "20px",
            }}
          >
            <TextField label="Description" sx={{ width: "500px" }}></TextField>
            <TextField label="Amount" sx={{ width: "200px" }}></TextField>
            <Button variant="contained">Add</Button>
          </Box>
        </Collapse>

        <Box sx={{ display: "flex", alignItems: " center" }}>
          <IconButton onClick={() => setShowNewItemForm(!showNewItemForm)}>
            <AddCircleOutlineIcon color="primary" />
          </IconButton>
          <Typography>{showNewItemForm ? "Cancel" : "Add new item"}</Typography>
        </Box>
      </Box>
    </>
  );
};

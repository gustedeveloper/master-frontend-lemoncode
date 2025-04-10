import { Alert, Snackbar } from "@mui/material";
import { FC } from "react";

interface Props {
  openSnackbar: boolean;
  setOpenSnackbar: (value: boolean) => void;
}

export const SnackBar: FC<Props> = (props) => {
  const { openSnackbar, setOpenSnackbar } = props;

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Order has been successfully sent!
        </Alert>
      </Snackbar>
    </>
  );
};

import { Item } from "@/core/model";
import { TableHeader } from "@/pods/table-header/table-header";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import { FC } from "react";
import { Action } from "./order-detail.container";
import { AlertDialog } from "@/core/components/delete-alert";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  items: Item[];
  handleCheckbox: (id: string) => void;
  validateInvalidate: (value: Action) => void;
  handleOnChange: (
    id: string,
    value: string,
    field: "description" | "amount"
  ) => void;
  deleteElement: (id: string) => void;
  editingItemId?: string;
  setEditingItemId: (id: string | undefined) => void;
  editItemDescription: (id: string) => void;
}

const headerElements: string[] = [
  "",
  "Status",
  "Description",
  "Amount",
  "Actions",
];

export const OrderDetailComponent: FC<Props> = (props) => {
  const {
    items,
    handleCheckbox,
    validateInvalidate,
    handleOnChange,
    deleteElement,
    editingItemId,
    setEditingItemId,
    editItemDescription,
  } = props;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          m: "30px 0px 20px 30px",
        }}
      >
        <Button
          variant="contained"
          onClick={() => validateInvalidate("validate")}
        >
          Validate
        </Button>
        <Button
          variant="contained"
          onClick={() => validateInvalidate("invalidate")}
        >
          Invalidate
        </Button>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 1000 }}>
          <TableHeader headers={headerElements} />
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.description}>
                <TableCell>
                  <Checkbox
                    checked={item.isChecked}
                    onChange={() => handleCheckbox(item.id)}
                  />
                </TableCell>
                <TableCell sx={{ color: item.status ? "#36c430" : "orange" }}>
                  {item.status ? "Validated" : "Pending"}
                </TableCell>
                <TableCell>
                  {editingItemId && editingItemId === item.id ? (
                    <TextField
                      autoFocus
                      value={item.description}
                      onChange={(e) =>
                        handleOnChange(item.id, e.target.value, "description")
                      }
                      onBlur={() => setEditingItemId(undefined)}
                      variant="standard"
                      size="small"
                      fullWidth
                    />
                  ) : (
                    <Box>{item.description}</Box>
                  )}
                </TableCell>
                <TableCell>
                  <Input
                    sx={{ width: "130px" }}
                    type="number"
                    value={item.amount === 0 ? "" : item.amount}
                    onChange={(e) =>
                      handleOnChange(item.id, e.target.value, "amount")
                    }
                  />
                  €
                </TableCell>
                <TableCell sx={{ display: "flex", pb: "18px" }}>
                  <IconButton>
                    <EditIcon onClick={() => editItemDescription(item.id)} />
                  </IconButton>
                  <AlertDialog
                    elementToDelete={item.id}
                    deleteElement={deleteElement}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

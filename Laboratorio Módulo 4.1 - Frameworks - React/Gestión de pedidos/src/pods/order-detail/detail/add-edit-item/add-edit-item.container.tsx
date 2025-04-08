import { FC, useState } from "react";
import { AddEditItemComponent } from "./add-edit-item.component";

export const AddEditItemContainer: FC = () => {
  const [showNewItemForm, setShowNewItemForm] = useState(false);
  return (
    <AddEditItemComponent
      showNewItemForm={showNewItemForm}
      setShowNewItemForm={setShowNewItemForm}
    />
  );
};

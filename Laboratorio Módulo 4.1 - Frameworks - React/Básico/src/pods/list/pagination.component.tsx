import React, { FC } from "react";
import { Pagination } from "@mui/material";

interface PaginationProps {
  totalMembers: number;
  membersPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginationComponent: FC<PaginationProps> = (props) => {
  const { totalMembers, membersPerPage, currentPage, setCurrentPage } = props;

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalMembers / membersPerPage); i++) {
    pages.push(i);
  }

  const handleChange = (_, value) => {
    setCurrentPage(value);
  };

  return (
    <Pagination
      sx={{ display: "flex", justifyContent: "center" }}
      count={pages.length}
      page={currentPage}
      onChange={handleChange}
      color="primary"
    />
  );
};

import React from "react";
import { Pagination } from "@mui/material";

export const PaginationComponent = ({
  totalMembers,
  membersPerPage,
  currentPage,
  setCurrentPage,
}) => {
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

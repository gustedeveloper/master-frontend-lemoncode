import { Grid2, List, Skeleton } from "@mui/material";
import React from "react";

interface ListSkeletonProps {
  array: any[];
}

export const ListSkeleton: React.FC<ListSkeletonProps> = ({ array }) => {
  return (
    <>
      <Grid2 container>
        <Grid2 size={12}>
          <Grid2 container spacing={2} sx={{ paddingBottom: "20px" }}>
            <Grid2 size={{ xs: 5, md: 2.5, lg: 2, xl: 1.5 }}>
              <Skeleton
                variant="rectangular"
                sx={{ minWidth: 110, height: 56 }}
              ></Skeleton>
            </Grid2>
            <Grid2
              size={{ xs: 7, md: 9.5, lg: 10, xl: 10.5 }}
              sx={{ display: "flex" }}
            >
              <Skeleton variant="rectangular" width={90} height={56}></Skeleton>
            </Grid2>
          </Grid2>

          <List
            sx={{ paddingTop: "0px", bgcolor: "white", padding: "0px 20px" }}
          >
            <Grid2 container>
              {array.map((_, index) => (
                <Skeleton
                  variant="rectangular"
                  key={index}
                  sx={{ minWidth: "304", height: 100 }}
                ></Skeleton>
              ))}
            </Grid2>
          </List>
        </Grid2>
      </Grid2>
    </>
  );
};

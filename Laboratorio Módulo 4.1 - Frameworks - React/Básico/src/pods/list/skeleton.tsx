import { Grid2, List, Skeleton } from "@mui/material";
import React from "react";

interface ListSkeletonProps {
  count: number;
}

export const ListSkeleton: React.FC<ListSkeletonProps> = ({ count }) => {
  return (
    <>
      <Grid2
        container
        sx={{
          margin: {
            xs: "64px 16px",
            sm: "32px",
            md: "48px",
            lg: "64px",
            xl: "80px",
          },
          minWidth: "300px",
          height: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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

          <Grid2 size={12}>
            <Skeleton variant="rectangular" height={65}></Skeleton>
          </Grid2>

          <List sx={{ paddingTop: "0px" }}>
            {Array.from({ length: count }).map((_, index) => (
              <Grid2
                container
                key={index}
                sx={{ alignItems: "center", padding: "8px 0px" }}
              >
                <Grid2 size={{ xs: 3.5, md: 4, lg: 2 }}>
                  <Skeleton
                    variant="circular"
                    sx={{
                      width: {
                        xs: "50px",
                        lg: "80px",
                      },
                      height: {
                        xs: "50px",
                        lg: "80px",
                      },
                    }}
                  ></Skeleton>
                </Grid2>
                <Grid2 size={{ xs: 4.25, md: 4, lg: 2 }}>
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem", width: 100 }}
                  ></Skeleton>
                </Grid2>
                <Grid2 size={{ xs: 4.25, md: 4, lg: 2 }}>
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem", width: 100 }}
                  ></Skeleton>
                </Grid2>
              </Grid2>
            ))}
          </List>
        </Grid2>
      </Grid2>
    </>
  );
};

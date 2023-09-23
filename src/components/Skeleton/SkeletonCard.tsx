import { arrayWithRandomValues } from "@/utils";
import { Grid, Skeleton } from "@mui/material";
import React from "react";

interface SkeletonCardProps {
  items?: number;
}

const SkeletonCard = ({ items = 11 }: SkeletonCardProps) => {
  const skeleton = arrayWithRandomValues(items);

  return (
    <>
      {skeleton.map((item) => (
        <Grid key={item} item lg={3} md={4} sm={6} xs={12}>
          <Skeleton variant="rounded" width={"100%"} height={417} />
        </Grid>
      ))}
    </>
  );
};

export default SkeletonCard;

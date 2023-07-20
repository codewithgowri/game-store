import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <List>
      <Skeleton></Skeleton>
      <ListItem>
        <SkeletonText></SkeletonText>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;

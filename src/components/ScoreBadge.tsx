import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}

const ScoreBadge = ({ score }: Props) => {
  const color =
    score > 90 ? "green" : score > 80 ? "yellow" : score > 70 ? "red" : "";

  return <Badge colorScheme={color}>{score}</Badge>;
};

export default ScoreBadge;

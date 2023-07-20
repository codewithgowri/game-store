import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/GetGamesHook";
import PlatformIcons from "./PlatformIcons";
import ScoreBadge from "./ScoreBadge";
import optimizeImageUrl from "../services/optimize-image-url";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { parent_platforms } = game;
  return (
    <Card width={"250px"} borderRadius={10} overflow={"hidden"}>
      <Image src={optimizeImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl"> {game.name}</Heading>

        <HStack justifyContent={"space-between"}>
          <PlatformIcons
            platform={parent_platforms.map((p) => p.platform)}
          ></PlatformIcons>
          <ScoreBadge score={game.metacritic}></ScoreBadge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

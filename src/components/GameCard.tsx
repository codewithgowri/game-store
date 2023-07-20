import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/GetGamesHook";
import PlatformIcons from "./PlatformIcons";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { parent_platforms } = game;
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl"> {game.name}</Heading>

        <PlatformIcons
          platform={parent_platforms.map((p) => p.platform)}
        ></PlatformIcons>
      </CardBody>
    </Card>
  );
};

export default GameCard;

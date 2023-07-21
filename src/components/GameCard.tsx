import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import ScoreBadge from "./ScoreBadge";
import optimizeImageUrl from "../services/optimize-image-url";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { parent_platforms } = game;
  return (
    <Card>
      <Image src={optimizeImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIcons
            platform={parent_platforms.map((p) => p.platform)}
          ></PlatformIcons>
          <ScoreBadge score={game.metacritic}></ScoreBadge>
        </HStack>
        <Heading fontSize="2xl"> {game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

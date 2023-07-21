import { Heading } from "@chakra-ui/react";
import { Geners } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedGenre: Geners | null;
  platform: Platform | null;
}
const GameHeading = ({ selectedGenre, platform }: Props) => {
  let head = "Games";
  if (selectedGenre?.name) head = selectedGenre.name + " Games";

  if (platform?.name) head = platform.name + " " + head;
  return (
    <Heading as="h1" marginY={5} fontSize={["3xl", "4xl", "5xl"]}>
      {head}
    </Heading>
  );
};

export default GameHeading;

import { Geners } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import optimizeImageUrl from "../services/optimize-image-url";
import useGenres from "../hooks/useGenres";

interface Props {
  onGenreClick: (genre: Geners) => void;
  selectedGenre: Geners | null;
}

const GenersList = ({ selectedGenre, onGenreClick }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      <List paddingY={"5px"}>
        {data.map((genere) => (
          <ListItem key={genere.id} paddingY={1}>
            <HStack>
              <Image
                src={optimizeImageUrl(genere.image_background)}
                boxSize={8}
                borderRadius={8}
              ></Image>
              <Button
                fontWeight={genere.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                onClick={() => {
                  onGenreClick(genere);
                }}
                fontSize={"md"}
                textAlign="left"
                key={genere.id}
                variant="link"
              >
                {genere.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenersList;

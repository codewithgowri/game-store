import getGeneres from "../hooks/FetchGenresHook";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import optimizeImageUrl from "../services/optimize-image-url";

const GenersList = () => {
  const { data, error, isLoading } = getGeneres();
  return (
    <List paddingY={"5px"}>
      {data.map((genere) => (
        <ListItem key={genere.id} paddingY={1}>
          <HStack>
            <Image
              src={optimizeImageUrl(genere.image_background)}
              boxSize={8}
              borderRadius={8}
            ></Image>
            <Text fontSize={"md"} key={genere.id}>
              {genere.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenersList;

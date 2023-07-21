import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenersList from "./components/GenersList";
import { Geners } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import OrderSelector from "./components/OrderSelector";
export interface GameQuery {
  genre: Geners;
  platform: Platform;
  sortItem: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenersList
            selectedGenre={gameQuery.genre}
            onGenreClick={(genre: Geners) =>
              setGameQuery({ ...gameQuery, genre })
            }
          ></GenersList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onPlatformSelect={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          ></PlatformSelector>
          <OrderSelector
            onSort={(sortItem) => setGameQuery({ ...gameQuery, sortItem })}
            selectedSortItem={gameQuery.sortItem}
          ></OrderSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;

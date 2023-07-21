import getData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => getData<Platform>("/platforms/lists/parents");

export default usePlatforms;

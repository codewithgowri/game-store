import useData from "./useData";

export interface Geners {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Geners>("/genres");
export default useGenres;

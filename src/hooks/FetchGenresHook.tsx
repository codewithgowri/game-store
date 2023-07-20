import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Geners {
  id: number;
  name: string;
}
interface FetchGenersResponse {
  count: number;
  results: Geners[];
}

const getGeneres = () => {
  const [generes, setGeneres] = useState<Geners[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenersResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGeneres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { generes, error, isLoading };
};
export default getGeneres;

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import getData from "./FetchData";

export interface Geners {
  id: number;
  name: string;
}
interface FetchGenersResponse {
  count: number;
  results: Geners[];
}

const getGeneres = () => getData<Geners>("/genres");
export default getGeneres;

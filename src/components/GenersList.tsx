import React from "react";
import getGeneres from "../hooks/FetchGenresHook";
import getData from "../hooks/FetchData";
import { Geners } from "../hooks/FetchGenresHook";

const GenersList = () => {
  const { data, error, isLoading } = getGeneres();
  return (
    <ul>
      {data.map((genere) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  );
};

export default GenersList;

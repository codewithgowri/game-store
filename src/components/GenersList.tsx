import React from "react";
import getGeneres from "../hooks/FetchGenresHook";

const GenersList = () => {
  const { generes, error, isLoading } = getGeneres();
  return (
    <ul>
      {generes.map((genere) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  );
};

export default GenersList;

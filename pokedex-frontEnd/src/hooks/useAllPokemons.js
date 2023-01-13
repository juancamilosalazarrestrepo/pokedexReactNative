import { useState, useEffect } from "react";

const useAllPokemons= () => {
  const [allPokemons, setAllPokemons] = useState(null);
  const [offSet, setOffSet] = useState(0);
  const fetchAllPokemons = async (limit = 150) => {
    let uri = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

    const response = await globalThis.fetch(uri);

    const json = await response.json();

    const promises = json.results.map(async (pokemon) => {
      const res = await globalThis.fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises)
    setAllPokemons(results);
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

 

  return allPokemons ;
};

export default useAllPokemons;

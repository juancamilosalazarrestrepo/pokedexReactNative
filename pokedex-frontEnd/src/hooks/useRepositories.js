import { useState, useEffect } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);
  const [offSet, setOffSet] = useState(150);
  const fetchRepositories = async (limit = 152) => {
    let uri = "https://pokeapi.co/api/v2/";

    const response = await globalThis.fetch(
      `${uri}pokemon?limit=10&offset=14`
    );

    const json = await response.json();

    const promises = json.results.map(async (pokemon) => {
      const res = await globalThis.fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises)
    setRepositories(results);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

 

  return repositories ;
};

export default useRepositories;

import {useState,useEffect} from "react"


const usePokemon= (id) => {
    
    const [pokemonData, setPokemonData] = useState(null);
  
  
    const fetchPokemonData = async () => {
      let uri =`https://pokeapi.co/api/v2/pokemon/${id}`
        
      const response = await globalThis.fetch(uri);
      
   console.log(response)
      const json = await response.json();
      console.log("pokemondata",json)
      console.log("entro")
      setPokemonData(json);
      
    };
  
    useEffect(() => {
        fetchPokemonData();
    }, []);
  


      

      return pokemonData
}

export default usePokemon
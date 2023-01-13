import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useParams } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import usePokemon from "../hooks/usePokemon";
import theme from "../theme.js";
import useAllPokemons from "../hooks/useAllPokemons";

const styles = StyleSheet.create({
  pokemonName: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  container: {
    borderColor: "#DEDEDE",
    borderWidth: 1,
    backgroundColor: "#DEDEDE",
    marginBottom: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const PokemonDataCard = () => {
  let { id } = useParams();

  console.log("id", id);

  let pokemonData = usePokemon(id);

  if (pokemonData) {
    return (
      <View>
        <Image
          style={styles.image}
          source={{ uri: pokemonData.sprites.front_default }}
        />
        <Text>{pokemonData.name}</Text>
      </View>
    );
  }
};

export default PokemonDataCard;

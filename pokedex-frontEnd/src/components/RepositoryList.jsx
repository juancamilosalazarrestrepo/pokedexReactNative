import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import usePokemon from "../hooks/usePokemon";
import theme from "../theme.js";
import useAllPokemons from "../hooks/useAllPokemons";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  pokemonName: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  plant: {
    borderColor: "#49D0B0",
    backgroundColor: "#49D0B0",
  },
  fire: {
    borderColor: "#F96C6C",
    backgroundColor: "#F96C6C",
  },
  water: {
    borderColor: "#6FB7F7",
    backgroundColor: "#6FB7F7",
  },
  electric: {
    borderColor: "#FFD76F",
    backgroundColor: "#FFD76F",
  },
  bug: {
    borderColor: "#8FC12A",
    backgroundColor: "#8FC12A",
  },
  flying: {
    borderColor: "#8FA8DE",
    backgroundColor: "#8FA8DE",
  },
  normal: {
    borderColor: "#9099A2",
    backgroundColor: "#9099A2",
  },
  poison: {
    borderColor: "#B763CF",
    backgroundColor: "#B763CF",
  },
  ground: {
    borderColor: "#DA7C4D",
    backgroundColor: "#DA7C4D",
  },
  fairy: {
    borderColor: "#EF90E6",
    backgroundColor: "#EF90E6",
  },
  fighting: {
    borderColor: "#D3425F",
    backgroundColor: "#D3425F",
  },
  psychic: {
    borderColor: "#FA8582",
    backgroundColor: "#FA8582",
  },
  rock: {
    borderColor: "#C9BC8A",
    backgroundColor: "#C9BC8A",
  },
  ghost: {
    borderColor: "#5F6DBC",
    backgroundColor: "#5F6DBC",
  },
  ice: {
    borderColor: "#76D1C1",
    backgroundColor: "#76D1C1",
  },
  dragon: {
    borderColor: "#0C6AC8",
    backgroundColor: "#0C6AC8",
  },
  dark: {
    borderColor: "#595761",
    backgroundColor: "#595761",
  },steel:{
    borderColor: "#5795A3",
    backgroundColor: "#5795A3",
  },
  

  container: {
    borderWidth: 1,
    marginBottom: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const containerFire = StyleSheet.compose(styles.container, styles.fire);
const containerPlant = StyleSheet.compose(styles.container, styles.plant);
const containerWater = StyleSheet.compose(styles.container, styles.water);
const containerElectric = StyleSheet.compose(styles.container, styles.electric);
const containerBug = StyleSheet.compose(styles.container, styles.bug);
const containerNormal = StyleSheet.compose(styles.container, styles.normal);
const containerFlying = StyleSheet.compose(styles.container, styles.flying);
const containerPoison = StyleSheet.compose(styles.container, styles.poison);
const containerGround = StyleSheet.compose(styles.container, styles.ground);
const containerFairy = StyleSheet.compose(styles.container, styles.fairy);
const containerFighting = StyleSheet.compose(styles.container, styles.fighting);
const containerPsychic = StyleSheet.compose(styles.container, styles.psychic);
const containerRock = StyleSheet.compose(styles.container, styles.rock);
const containerGhost = StyleSheet.compose(styles.container, styles.ghost);
const containerIce = StyleSheet.compose(styles.container, styles.ice);
const containerDragon = StyleSheet.compose(styles.container, styles.dragon);
const containerDark = StyleSheet.compose(styles.container, styles.dark);
const containerSteel = StyleSheet.compose(styles.container, styles.steel);

const RepositoryList = () => {
  const repositories = useRepositories();

  if (repositories) {
    return (
      <ScrollView>
        {repositories.map((poke, index) => {
          let typeStyle = "";
          /* if (poke.types[0].type.name == "fire") {
            typeStyle = containerFire;
          } else {
            typeStyle = containerPlant;
          }*/
          console.log("tipos", poke.types, "pokemon", poke.name);
          switch (poke.types[0].type.name) {
            case "fire":
              typeStyle = containerFire;
              break;
            case "grass":
              typeStyle = containerPlant;
              break;
            case "water":
              typeStyle = containerWater;
              break;
            case "electric":
              typeStyle = containerElectric;
              break;
            case "bug":
              typeStyle = containerBug;
              break;
            case "normal":
              if (poke.types[1]) {
                switch (poke.types[1].type.name) {
                  case "fire":
                    typeStyle = containerFire;
                    break;
                  case "grass":
                    typeStyle = containerPlant;
                    break;
                  case "water":
                    typeStyle = containerWater;
                    break;
                  case "electric":
                    typeStyle = containerElectric;
                    break;
                  case "bug":
                    typeStyle = containerBug;
                    break;
                  case "flying":
                    typeStyle = containerFlying;
                    break;
                  case "fairy":
                    typeStyle = containerFairy;
                    break;
                    case "psychic":
                      typeStyle = containerPsychic;
                      break;  


                }
              } else {
                typeStyle = containerNormal;
                break;
              }
              break;
            case "flying":
              typeStyle = containerFlying;
              break;
            case "poison":
              typeStyle = containerPoison;
              break;
            case "ground":
              typeStyle = containerGround;
              break;
            case "fairy":
              typeStyle = containerFairy;
              break;
            case "fighting":
              typeStyle = containerFighting;
              break;
            case "psychic":
              typeStyle = containerPsychic;
              break;
            case "rock":
              typeStyle = containerRock;
              break;
            case "ghost":
              typeStyle = containerGhost;
              break;
            case "ice":
              typeStyle = containerIce;
              break;
            case "dragon":
              typeStyle = containerDragon;
              break;
              case "dark":
              typeStyle = containerDark;
              break;
              case "steel":
              typeStyle = containerSteel;
              break;
          }
          return (
            <Link to={`/pokemon/${index + 1}`} key={index}>
              <View style={typeStyle}>
                <Image
                  style={styles.image}
                  source={{ uri: poke.sprites.front_default }}
                />
                <Text style={styles.pokemonName}>{poke.name}</Text>
              </View>
            </Link>
          );
        })}
      </ScrollView>
    );
  }
};

export default RepositoryList;

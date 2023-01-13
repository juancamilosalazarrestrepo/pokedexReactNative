import { View, Text } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import { Route, Routes } from "react-router-native";
import LogInPage from "../pages/LogIn";
import PokemonDataCard from "../components/PokemonDataCard";

const home = () => <Text>Home</Text>;
const repolist = () => <RepositoryList />;

/*const AppBar = Platform.select({
  ios:()=> require("./IOSAppBar.jsx").default,
  android:()=> require ("./AndroidAppBar.jsx").default,
  default:()=>require("./AppBar.jsx").default
})()*/

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LogInPage/>} />
        <Route path="/pokemon/:id" element={<PokemonDataCard/>} />
      </Routes>
    </View>
  );
};

export default Main;

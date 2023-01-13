import ApolloClient from "apollo-boost";


const createApolloClient = () =>
  new ApolloClient({
    uri: "http://192.168.20.28:5000/graphql",
  });

export default createApolloClient;

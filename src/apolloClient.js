import ApolloClient, {
  createNetworkInterface
} from "apollo-client";
const client = new ApolloClient({
  networkInterface: createNetworkInterface("http://localhost:3000/graphql"),
  // queryTransformer: addTypeName
});
export default client;

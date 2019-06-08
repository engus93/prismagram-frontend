// Modules
import ApolloClient from "apollo-boost";

// MY Files List
import { defaults, resolvers } from "./LocalState";

// Connect Apollo Client
export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

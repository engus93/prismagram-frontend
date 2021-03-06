// Logged Check Query
export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false
};

// Log In and Out Resolver
export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      return null;
    },
    logUserOut: () => {
      localStorage.removeItem("token");
      window.location = "/";
      return null;
    }
  }
};

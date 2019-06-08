// Import
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";

// My Files List
import SearchPresenter from "./SearchPresenter";
import { SEARCH } from "./SearchQueries";

export default withRouter(({ location: { search } }) => {
  // Search Word Split
  const term = search.split("=")[1];

  /* Query */

  // User and Post Searching Query
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term
    }
  });

  // Render
  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
});

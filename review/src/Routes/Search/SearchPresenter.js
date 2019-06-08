// Import
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// My Files List
import FatText from "../../Components/FatText";

// Styled Component
const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

// Reder
const SearchPresenter = ({ searchTerm, loading }) => (
  <Wrapper>
    {searchTerm === undefined && <FatText text={"Search for something"} />}
  </Wrapper>
);

// PropTypes Structure
SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool
};

export default SearchPresenter;

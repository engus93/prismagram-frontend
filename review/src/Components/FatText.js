// Modules
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled Component
const Text = styled.span`
  font-weight: 600;
`;

// Render
const FatText = ({ text }) => <Text>{text}</Text>;

// PropTypes Structure
FatText.propTypes = {
  text: PropTypes.string.isRequired
};

export default FatText;

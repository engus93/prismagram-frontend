// Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Function
const getSize = size => {
  let number;
  if (size === "sm") {
    number = 30;
  } else if (size === "md") {
    number = 50;
  } else if (size === "lg") {
    number = 150;
  }
  return `
        width:${number}px;
        height:${number}px;
        `;
};

// Styled Component
const Container = styled.div`
  ${props => getSize(props.size)}
  background-image: url(${({ url }) => url});
  background-size: cover;
  border-radius: 50%;
`;

const Avatar = ({ size = "sm", url }) => <Container size={size} url={url} />;

Avatar.propTypes = {
  // 선택지 중에 하나
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  url: PropTypes.string.isRequired
};

export default Avatar;

// Modules
import React from "react";
import styled, { keyframes } from "styled-components";

// My Files List
import { Logo } from "./Icons";

const Animation = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;

    }
`;

// Styled Component
const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
`;

// Render
export default () => (
  <Loader>
    <Logo size={36} />
  </Loader>
);

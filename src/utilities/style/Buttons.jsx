import styled, { css, keyframes } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import colors from "./Colors";
const zoomIn = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`;
const zoomOut = keyframes`
  from{
     transform: scale(1);
  }
  to{
    transform: scale(0);
   
  }
`;
const Buttons = styled(Link)`
  display: block;
  text-decoration: none;
  width: 150px;
  padding: 10px;
  text-align: center;
  color: ${(props) => (props.theTheme ? `${colors.primary}` : `white`)};
  animation: ${(props) =>
    props.theAnimation === true
      ? css`
          ${zoomOut} 0.6s ease-in-out 0.3s both
        `
      : css`
          ${zoomIn} 0.6s ease-in-out 0.3s both
        `};

  ${(props) =>
    props.primary &&
    css`
      background-color: ${colors.primaryPurpule};
    `}
  border: none;

  border-radius: 20px;
  margin-top: 20px;
  &:hover {
    background-color: ${colors.primaryPurpuleHover};
    cursor: pointer;
  }
  ${(props) =>
    props.secondary &&
    `background-color:transparent;
      border:2px solid ${colors.primaryPurpule};
       &:hover{
        color:white;
      }
      color:${
        props.theme === true &&
        `${colors.paragraphColorDark}
      `
      }
      ;
      `}
  ${(props) =>
    props.gradient
      ? `background:${colors.gradient};
      color:${props.theTheme === true && `white`};
      `
      : `${colors.primaryPurpule}`};
`;

export default Buttons;

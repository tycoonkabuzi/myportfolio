import styled from "styled-components";
import colors from "./Colors";
const SquareShape = styled.div`
  width: 100%;
  border: 15px solid ${colors.primaryPurpule};
  border-radius: 15px;
  // picture square
  ${(props) =>
    props.profileSquare &&
    `   width: 80%;  height: 430px;  @media only screen and (max-width: 600px) {
    order: 2;

  }
   @media only screen and (min-width: 600px) {
    order:2;
  }
  
  
   @media only screen and (min-width: 992px) {
    width: 50%;
    margin:auto;
  }`}
  ${(props) =>
    props.projectSquare &&
    `   width: 50%;  height: 185px; @media only screen and (max-width: 600px) {
    left: 10px;
    bottom: 50px;
    margin-top:50px;
  }

  @media only screen and (min-width: 600px) {
    left: 10px;
    bottom: 50px;
    margin-top:50px;
  }
  `}
`;
export default SquareShape;

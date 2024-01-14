import styled from "styled-components";
import colors from "./Colors";
const SquareShape = styled.div`
  border: 15px solid ${colors.primaryPurpule};
  border-radius: 15px;
  // picture square
  ${(props) => props.profileSquare && `   width: 80%;  height: 430px;`}
  ${(props) => props.projectSquare && `   width: 50%;  height: 200px;`}
`;
export default SquareShape;

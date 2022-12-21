import styled from "styled-components";
import { colors } from "../../color";

export const TextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.15);
  padding: 15px 7px;
  border-radius: 4px;
  color: ${colors.white};
  margin-bottom: ${(props) => (props.lastOne ? "15" : 8)}px;
`;

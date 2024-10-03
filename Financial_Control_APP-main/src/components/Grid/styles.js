import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  padding: 20px;
  max-width: 1120px;
  margin: 20px auto;
 
  border-radius: 5px;

  background-color: #afb4b4;
  box-shadow: 0px 0px 8px #000000;
  color: black;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;

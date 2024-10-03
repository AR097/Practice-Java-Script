import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  padding: 5px 15px;

  border-radius: 5px;
  background-color: #afb4b4;
  box-shadow: 0px 0px 8px #000000;
  color: white;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
  `;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 5px auto;

  border: solid 1px black;
  box-shadow: 0 8px 4px -3px rgba(0, 0, 0, 0.5);

  svg {
    width: 25px;
    height: 25px;
    color: black;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: black;
  font-weight: bold;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 240px auto 0 auto;
  width: 98%;
  padding: 15px 0px;
  gap: 10px;

  display: flex;
  justify-content: space-around;

  background-color: #afb4b4;
  color: white;
  box-shadow: 0px 0px 8px #000000;
  border-radius: 5px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-weight: bold;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  padding: 5px 10px;
  border-radius: 5px;

  font-size: 15px;
  font-weight: bold;
  color: black;

  background-color: #c2c0c5;
  border: solid 1px black;
  box-shadow: 0 8px 4px -3px rgba(0, 0, 0, 0.5);
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-weight: bold;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 20%;
  cursor: pointer;
  color: black;
  font-weight: bold;
  background-color: #aeacaf;
  box-shadow: 0 8px 4px -3px rgba(0, 0, 0, 0.3);
`;

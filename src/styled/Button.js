import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  color: white;
  width: 220px;
  border: none;
  font-size: 16px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: all 0.3s ease-in-out;
  }
`;

export const OutlineButton = styled(Button)`
  background: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

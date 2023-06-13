import styled, { css } from "styled-components";

const Button = styled.button`
  font-size: 17px;
  padding: 0.5em 2em;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background: dodgerblue;
  color: white;
  border-radius: 4px;
  margin: 0px 10px;

  :hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(30, 144, 255, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
  }

  :active {
    transform: translate(0em, 0.2em);
  }

  ${({ variant }) => {
    if (variant === "drop-down") {
      return css`
        text-align: center;
        font-size: 17px;
        padding: 0.5em;
        width: 100%;
        margin: 5px;
      `;
    }
  }}
`;

export default Button;

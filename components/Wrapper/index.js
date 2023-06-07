import styled, { css } from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;

  ${({ variant }) => {
    if (variant === "column") {
      return css`
        flex-direction: column;
        justify-content: space-evenly;
      `;
    } else if (variant === "row") {
      return css`
        justify-content: center;
        width: 100%;
      `;
    }
  }}
`;

export default Wrapper;

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
        text-align: center;
        width: 100%;
      `;
    } else if (variant === "row-left") {
      return css`
        align-items: center;
        justify-content: flex-start;
        width: 100%;
      `;
    } else if (variant === "row-card") {
      return css`
        justify-content: center;
        width: 100%;
        height: 50px;
        border-radius: 5px;
        background: var(--secondary-color);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin: 2px;
        padding-left: 5px;
      `;
    }
  }}
`;

export default Wrapper;

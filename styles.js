import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: openSans;
  }

  html{
    --main-heading-color: #8ac0db;
  }
`;

export const StyledCard = styled.div``;

export const StyledLoader = styled.div`
  display: block;
  --height-of-loader: 4px;
  --loader-color: #0071e2;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;

  :before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
  background-color: var(--main-heading-color);
  margin-top: 0px;
  padding: 15px 0px;
  font-family: openSans;
`;

export const StyledButton = styled.button`
  font-size: 17px;
  padding: 0.5em 2em;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background: dodgerblue;
  color: white;
  border-radius: 4px;

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
`;

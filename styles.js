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
    font-family: openSans;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  html{
    --primary-color: dodgerblue;
    --secondary-color: white;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  li{
    list-style-type: none;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 254px;
  border-radius: 5px;
  background: var(--secondary-color);
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  padding: 0;
`;

export const StyledButtonSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledListItem = styled.li`
  width: 95%;
  height: 100px;
  border-radius: 5px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  margin: 10px;
  padding: 5px;
`;

export const StyledLoader = styled.div`
  display: block;
  width: 130px;
  height: 4px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;

  :before {
    content: "";
    position: absolute;
    background: var(--primary-color);
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
  background-color: var(--primary-color);
  color: white;
  margin-top: 0px;
  padding: 15px 0px;
  font-family: openSans;
  width: 100%;
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

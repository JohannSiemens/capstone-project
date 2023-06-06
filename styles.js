import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Open_Sans } from "@next/font/google";
import Link from "next/link";

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
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  //height: 254px;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  text-align: center;
  width: 100%;
  padding: 10px;
  text-decoration: none;
  font-size: 25px;
  padding-top: 0;
`;

export const StyledWrapperRow = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const StyledWrapperColumn = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledInput = styled.input`
  margin: 10px 0px;
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  background: #e8e8e8;
  transition: 0.3s;

  :focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;
    transition: 0.3s;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  height: 100px;
`;

export const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  height: 120px;
  border-radius: 5px;
  background: var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 10px;
  padding: 0;
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

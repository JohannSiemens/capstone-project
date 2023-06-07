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
  justify-content: center;
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
  width: 80%;

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

  .big {
    height: 100px;
    justify-content: center;
    align-items: center;
  }

  .one-input {
    justify-content: center;
    align-items: center;
  }
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

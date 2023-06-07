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

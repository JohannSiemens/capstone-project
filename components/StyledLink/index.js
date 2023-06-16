import styled from "styled-components";
import Link from "next/link";

const StyledWorkout = styled(Link)`
  text-align: center;
  width: 100%;
  padding: 10px;
  text-decoration: none;
  font-size: 25px;
  padding-top: 0;
`;

const NoDecoration = styled(Link)`
  text-align: center;
  width: 100%;
  text-decoration: none;
  color: white;
  font-size: 17px;
  padding: 0;
  margin: 0;
`;

const ButtonType = styled(Link)`
  text-decoration: none;
  font-size: 17px;
  padding: 0.5em;
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
`;

const StyledLink = ({ children, variant, component, ...props }) => {
  if (variant === "workout") {
    return (
      <StyledWorkout as={component} {...props}>
        {children}
      </StyledWorkout>
    );
  } else if (variant === "text-decoration") {
    return (
      <NoDecoration as={component} {...props}>
        {children}
      </NoDecoration>
    );
  } else if (variant === "button-type") {
    return (
      <ButtonType as={component} {...props}>
        {children}
      </ButtonType>
    );
  }
};

export default StyledLink;

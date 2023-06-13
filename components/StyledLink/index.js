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
  }
};

export default StyledLink;

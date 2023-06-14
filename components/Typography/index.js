import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  background-color: var(--primary-color);
  color: white;
  margin-top: 0px;
  padding: 15px 0px;
  width: 100%;
`;

const StyledText = styled.p`
  text-align: center;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 5px 0px;
  width: 100%;
  font-size: 18px;
`;

const Typography = ({ children, variant, component, ...props }) => {
  if (variant === "h1") {
    return (
      <StyledH1 as={component} {...props}>
        {children}
      </StyledH1>
    );
  } else if (variant === "text") {
    return (
      <StyledText as={component} {...props}>
        {children}
      </StyledText>
    );
  }
};

export default Typography;

import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  background-color: var(--primary-color);
  color: white;
  margin-top: 0px;
  padding: 15px 0px;
  font-family: openSans;
  width: 100%;
`;

const Typography = ({ children, variant, component, ...props }) => {
  if (variant === "h1") {
    return (
      <StyledH1 as={component} {...props}>
        {children}
      </StyledH1>
    );
  }
};

export default Typography;

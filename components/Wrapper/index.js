import styled from "styled-components";

const WrapperRow = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const WrapperColumn = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Wrapper = ({ children, variant, component, ...props }) => {
  if (variant === "row") {
    return (
      <WrapperRow as={component} {...props}>
        {children}
      </WrapperRow>
    );
  } else if (variant === "column") {
    return (
      <WrapperColumn as={component} {...props}>
        {children}
      </WrapperColumn>
    );
  }
};

export default Wrapper;

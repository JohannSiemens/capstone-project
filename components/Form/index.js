import styled from "styled-components";

const SmallForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = ({ children, variant, component, ...props }) => {
  if (variant === "small") {
    return (
      <SmallForm as={component} {...props}>
        {children}
      </SmallForm>
    );
  }
};

export default Form;

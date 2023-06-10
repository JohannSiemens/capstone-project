import styled from "styled-components";

const Input = styled.input`
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

export default Input;

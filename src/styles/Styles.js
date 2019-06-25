import styled from "styled-components";

const Button = styled.button`
  background-color: #c015e9;
  color: #ffffff;

  &:hover {
    color: #ffffff;
  }

  &:focus {
    background-color: #7b1fa2;
  }
`;

const Input = styled.input`
  &:focus {
    border-color: #c015e9;
    -webkit-box-shadow: 0px 0px 3px 1px rgba(192, 21, 233, 1);
    -moz-box-shadow: 0px 0px 3px 1px rgba(192, 21, 233, 1);
    box-shadow: 0px 0px 3px 1px rgba(192, 21, 233, 1);
  }
`;

const Form = styled.form`
  p {
    font-family: "Ubuntu", sans-serif;
  }
`;

export { Button, Input, Form };

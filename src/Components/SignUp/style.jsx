import styled from "@emotion/styled";
import * as button from "../../style/button";
import * as font from "../../style/font";

export const SignUpLayoutCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  margin: 10px auto;
  padding: 40px 20px;
  height: calc(100vh - 20px);

  border: 1px solid;
  border-radius: 5px;
`;

export const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 0;
  padding: 0;
`;

export const InputItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;

  list-style: none;
`;

export const Label = styled.label`
  width: 50px;
  ${font.boldBody}
`;

export const Input = styled.input`
  width: 150px;
  border: none;
  outline: none;
  border-bottom: 1.5px solid;
  ${font.normalSmall}
`;

export const Btn = styled.button`
  ${(props) => {
    return props.featured ? button.green : button.normal;
  }}}
`;

export const SubmitBtnsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  margin: 30px 0 0;
`;

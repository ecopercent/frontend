import styled from "@emotion/styled";
import * as button from "@style/button";

export const SignUpLayoutCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px 10px;
  padding: 40px 20px;
  height: calc(100vh - 20px);

  border: 1px solid;
  border-radius: 10px;
  overflow-y: auto;
`;

export const InputList = styled.ul`
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: column;
  gap: 40px;

  margin: 0;
  padding: 0;
`;

/*
 *          Submit Btn
 */

export const SubmitBtnsBox = styled.div`
  width: 90%;
  display: flex;

  justify-content: space-between;

  margin: 30px 0 0;
`;

export const Btn = styled.button`
  ${(props) => {
    if (props.featured) return button.green;
    if (props.warning) return button.pink;
    if (props.disabled) return button.disabled;
    return button.normal;
  }}

  ${(props) => {
    if (!props.disabled)
      return `:hover {
    opacity: 0.7;
  }`;
    return null;
  }}
`;

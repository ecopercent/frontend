import styled from "@emotion/styled";
import * as button from "@style/button";

export const SignUpContainer = styled.div`
  height: calc(100% - 20px);
  margin: 10px 10px;
  padding: 40px 20px;

  border: 1px solid;
  border-radius: 10px;
`;

export const SignUpLayoutCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const InputList = styled.ul`
  display: flex;
  flex-direction: column;

  min-height: 100%;
  width: 90%;
  gap: 40px;

  margin: 0;
  padding: 0;
`;

/*
 *          Submit Btn
 */

export const SubmitBtnsBox = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  margin-top: auto;
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

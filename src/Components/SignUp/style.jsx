import styled from "@emotion/styled";
import * as button from "../../style/button";
import * as font from "../../style/font";

export const SignUpLayoutCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  margin: 10px 10px;
  padding: 40px 20px;
  height: calc(100vh - 20px);

  border: 1px solid;
  border-radius: 5px;
`;

export const InputList = styled.ul`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 30px;

  margin: 0;
  padding: 0;

  height: 90%;
  overflow: auto;
`;

export const InputItem = styled.li`
  display: flex;
  ${(props) => {
    return props.col ? "flex-direction: column;" : "";
  }}
  gap: 10px;
  position: relative;

  list-style: none;
`;

export const Label = styled.label`
  width: 50px;
  padding: 5px 0 0;

  ${font.boldBody}
  line-height: 16px;
`;

export const Input = styled.input`
  // width: 150px;
  // flex: 1;
  border: none;
  outline: none;
  border-bottom: 1.5px solid;
  ${font.normalSmall}
`;

/*
 *          Textarea style
 */

export const TextareaHr = styled.hr`
  display: block;
  position: absolute;
  top: 16px;
  left: 60px;
  width: 200px;
  border: 0;
  height: 1.5px;
  background: black;
`;

export const Textarea = styled.textarea`
  width: 200px;
  height: 50px;
  border: none;
  outline: none;
  border-bottom: 1.5px solid;
  resize: none;
  ${font.normalTextarea}
  line-height: 25px;
`;

/*
 *          Item Post
 */

export const LabelBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const NoticeText = styled.span`
  ${font.normalXsmall};
`;

/*
 *          Submit Btn
 */

export const Btn = styled.button`
  ${(props) => {
    if (props.featured) return button.green;
    if (props.delete) return button.pink;
    return button.normal;
  }}}
`;

export const SubmitBtnsBox = styled.div`
  width: 90%;
  display: flex;

  justify-content: space-between;
  position: absolute;
  bottom: 20px;

  margin: 30px 0 0;
`;

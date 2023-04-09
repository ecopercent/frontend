import styled from "@emotion/styled";
import { BsCheckLg } from "react-icons/bs";
import * as font from "../../../style/font";
import * as button from "../../../style/button";
import { basicGreen } from "../../../style/color";

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
  border: none;
  outline: none;
  border-bottom: 1.5px solid;
  ${font.normalSmall}
`;

export const WarningText = styled.span`
  position: absolute;
  top: 35px;
  ${font.normalXsmall};
  color: red;
`;

export const NoticeText = styled.span`
  ${font.normalXsmall};
  ${(props) => {
    if (props.msg)
      return `
        width: 40px;
        position: absolute;
        top: 50px;
        left: 220px;
        padding-top: 3px;
        color: gray;
        text-align: right;
    `;
    return null;
  }}
`;

export const ValidCheckIcon = styled(BsCheckLg)`
  margin-left: -5px;
  margin-top: 3px;
  color: ${basicGreen};
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
  ${font.normalSmall}
  line-height: 25px;
`;

/*
 *          Item Post
 */

export const LabelBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Btn = styled.button`
  ${(props) => {
    if (props.featured) return button.green;
    if (props.warning) return button.pink;
    if (props.disabled) return button.disabled;
    return button.normal;
  }}}
`;

/*
 *          Item Preview
 */

export const ItemPreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* padding: 10px 10px 0px; */
  padding: 15px 20px;
  margin-top: 5px;

  border: 1px solid gray;
  border-radius: 5px;

  ${font.normalSmall};
`;

export const BundleOfTwoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SetBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

// 임시로 div 태그 사용. 추후 img 태그 변경
export const ItemImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 100%;

  margin-right: 5px;
`;

export const LabelText = styled.span`
  width: 40px;
  padding: 5px 0 0;

  ${font.boldSmall}
  line-height: 12px;
`;

export const ContentText = styled.span`
  width: 150px;
  padding: 5px 0 0;

  ${font.normalSmall}
  line-height: 12px;
`;

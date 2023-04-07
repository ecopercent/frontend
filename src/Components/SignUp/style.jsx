import styled from "@emotion/styled";
import { BsPatchCheckFill } from "react-icons/bs";
import * as button from "../../style/button";
import * as font from "../../style/font";
import { basicGreen } from "../../style/color";

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
  gap: 40px;

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

export const ValidCheckIcon = styled(BsPatchCheckFill)`
  margin-left: -3px;
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

/*
 *          Submit Btn
 */

export const Btn = styled.button`
  ${(props) => {
    if (props.featured) return button.green;
    if (props.warning) return button.pink;
    if (props.disabled) return button.disabled;
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

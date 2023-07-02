import styled from "@emotion/styled";
import * as font from "@style/font";
import * as button from "@style/button";
import media from "@style/media";

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
  width: 60px;
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

/*
 *          Textarea style
 */

export const TextareaHr = styled.hr`
  display: block;
  position: absolute;
  top: 16px;
  left: 70px;
  width: 200px;
  border: 0;
  height: 1.3px;
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
  }}

  ${(props) => {
    if (!props.disabled) return `:hover { opacity: 0.7; }`;
    return null;
  }}
  
  padding: 0;
`;

/*
 *          Item Preview
 */

export const ItemPreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  @media ${media.mobile} {
    padding: 15px 15px 20px;
  }
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
  width: 50%;
`;

export const ItemImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;

  margin-right: 5px;
`;

export const LabelText = styled.span`
  width: 30%;
  @media ${media.mobile} {
    width: 35%;
  }

  padding: 5px 0 0;

  ${font.boldSmall}
  line-height: 12px;
`;

export const ContentText = styled.span`
  width: 70%;
  @media ${media.mobile} {
    width: 65%;
  }
  padding: 5px 0 0;

  ${font.normalSmall}
  line-height: 12px;
`;

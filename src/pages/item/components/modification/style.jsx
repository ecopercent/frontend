import styled from "@emotion/styled";
import * as btn from "@style/button";
import * as font from "@style/font";
import media from "@style/media";

export const ItemEditWrap = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
`;

export const ItemEditBorder = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  overflow-y: auto;

  padding: 20px 20px 40px;
  @media ${media.mobile} {
    padding-bottom: 30px;
  }
`;

export const ItemEditHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  @media ${media.mobile} {
    height: 10px;
  }
`;

export const ItemEditHead3 = styled.h3`
  margin: 0;
  ${font.boldBody}
`;

export const ImageClipper = styled.img`
  width: 120px;
  height: 150px;
  object-fit: cover;
  border-radius: 45%;
  border: 1px solid;
`;

export const ItemImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;

  @media not ${media.mobile} {
    margin-top: 30px;
  }
`;

export const FormInnerWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media ${media.mobile} {
    gap: 12px;
  }

  flex: 1 1 auto;
  margin-bottom: 20px;
`;

export const LabelInputSet = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 70%;
`;

export const Span = styled.span`
  width: 70px;
  ${font.boldBody};
`;

export const Input = styled.input`
  width: 70%;
  ${font.normalSmall};
  line-height: 1;
  ::-webkit-date-and-time-value {
    text-align: left;
    padding-bottom: 3px;
  }

  border: 0;
  border-bottom: 1.5px solid;
  outline: none;
  :read-only {
    border: 0;
  }

  background-color: white;
  color: black;
`;

export const Select = styled.select`
  ${font.normalSmall};
  line-height: 1.5;
  color: black;

  width: 70%;
  padding-left: 2px;
  outline: 0;
  border: 0;
  border-bottom: 1.5px solid black;
  @media ${media.mobile} {
    padding: 4px 7px;
  }

  background: no-repeat url("/img/selectArrow.png");
  background-size: 6%;
  background-position: 98% 60%;
`;

export const Error = styled.div`
  ${font.normalXsmall};
  font-weight: 600;
  text-align: center;
  margin: auto 0 0;
  color: #e01e5a;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SubmitBtn = styled.button`
  ${btn.green}
  ${font.normalBtn}
`;

export const CancelBtn = styled.button`
  ${btn.normal}
  ${font.normalBtn}
`;

export const DeleteBtn = styled.button`
  ${btn.pink}
  ${font.normalBtn}
`;

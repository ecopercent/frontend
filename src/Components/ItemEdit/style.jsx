import styled from "@emotion/styled";
import * as btn from "../../style/button";
import * as font from "../../style/font";

export const ItemEditBorder = styled.div`
  position: absolute;
  width: 98%;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ItemEditHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3%;
  margin: 1%;
`;

export const ImageClipper = styled.img`
  width: 120px;
  height: 150px;
  object-fit: cover; /* 이미지 비율 유지 */
  border-radius: 45%;
  border: 1px solid;
`;

export const ItemDetalImagerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-top: 2%;
  padding-bottom: 3%;
  height: 25%;
`;

export const EditDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  // flex-direction: column;
  justify-content: center;
  // align-items: center;
  height: 65%;
`;

export const Form = styled.form`
  width: 70%;
`;

export const FormInnerWrapper = styled.div`
  width: 100%;
  height: 80%;
  paddingtop: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 10%;
  width: 80%;
  font-size: 18px;
  line-height: 1;
  padding-left: 5%;
  border-radius: 6px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  margin-bottom: 5px;
`;

export const Select = styled.select`
  height: 10%;
  width: 80%;
  font-size: 18px;
  line-height: 1;
  padding-left: 5%;
  border-radius: 6px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  margin-bottom: 5px;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 80%;
  padding-right: 10%;
  margin-bottom: 3px;
`;

export const Error = styled.div`
  color: #e01e5a;
  padding-bottom: 1%;
  padding-left: 10%;
  width: 100%;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 80%;
  margin-left: 10%;
`;

export const SubmitBtn = styled.button`
  ${btn.green}
  ${font.normalBtn}
`;

export const CancelBtn = styled.button`
  ${btn.normal}
  ${font.normalBtn}
`;

export const DeletreBtn = styled.button`
  ${btn.normal}
  ${font.normalBtn}
  color: red;
`;

import styled from "@emotion/styled";
import { HiOutlineCamera } from "react-icons/hi";
import * as btn from "@style/button";
import * as font from "@style/font";

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
  gap: 10px;
`;

export const ItemEditHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 0;
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
  overflow-y: auto;
`;

export const FormInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1 1 auto;
  overflow-y: auto;
`;

export const LabelInputSet = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 70%;
`;

export const Span = styled.span`
  width: 80px;
  ${font.boldBody};
`;

export const Input = styled.input`
  width: 80%;
  ${font.normalSmall};
  line-height: 1;
  border: 0;
  border-bottom: 2px solid;
  -webkit-appearance: none;
  outline: none;
  :read-only {
    border: 0;
  }
`;

export const Select = styled.select`
  font-size: 15px;
  line-height: 1;
  padding-left: 5%;
  border-radius: 6px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  margin-bottom: 5px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
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

export const CameraIcon = styled(HiOutlineCamera)`
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 150px;
  border-radius: 45%;
  padding: 30px 30px;
  background: rgba(0, 0, 0, 0.2);
  color: white;
`;

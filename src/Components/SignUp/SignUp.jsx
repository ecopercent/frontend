import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PcPageWrap } from "../../Layouts/Main/style";
import CancelCheckModal from "../Modal/CancelCheckModal";
import SignUpUser from "./SignUpUser";
import SignUpItems from "./SignUpItems";
import * as S from "./style";

export default function SignUp() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [cancelConfirm, setCancelConfirm] = useState(false);

  const handleSubmit = () => {
    // TODO: 입력 유효성 검사
    // TODO: 가입 완료 페이지 구현 + 리다이렉트
    return alert("입력 유효성 검사 > 가입 완료 페이지로..");
  };

  // TODO: 페이지 이탈 확인

  const handleClick = () => {
    setModalIsOpen(true);
  };

  return (
    <PcPageWrap style={{ paddingBottom: "0" }}>
      {modalIsOpen && (
        <CancelCheckModal
          onClose={() => {
            setModalIsOpen(false);
          }}
          onConfirm={() => {
            setModalIsOpen(false);
            navigate(-1);
          }}
        />
      )}
      <S.SignUpLayoutCol>
        <S.InputList>
          <SignUpUser />
          <SignUpItems category="tumbler" />
          <SignUpItems category="ecobag" />
        </S.InputList>
        <S.SubmitBtnsBox>
          <S.Btn onClick={handleClick}>취소</S.Btn>
          <S.Btn featured onClick={handleSubmit}>
            등록
          </S.Btn>
        </S.SubmitBtnsBox>
      </S.SignUpLayoutCol>
    </PcPageWrap>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { PcPageWrap } from "../../Layouts/Main/style";
import SignUpUser from "./SignUpUser";
import SignUpItems from "./SignUpItems";
import * as S from "./style";

export default function SignUp() {
  const navigate = useNavigate();

  const onSubmit = () => {
    // TODO: 입력 유효성 검사
    // TODO: 가입 완료 페이지 구현 + 리다이렉트
    return alert("입력 유효성 검사 > 가입 완료 페이지로..");
  };

  const onCancel = () => {
    // TODO: 취소 확인 모달 구현
    alert("(모달) 입력중인 정보는 저장되지 않습니다. 돌아가시겠습니까?");
    return navigate(-1);
  };

  return (
    <PcPageWrap style={{ paddingBottom: "0" }}>
      <S.SignUpLayoutCol>
        <S.InputList>
          <SignUpUser />
          <SignUpItems category="텀블러" />
          <SignUpItems category="에코백" />
        </S.InputList>
        <S.SubmitBtnsBox>
          <S.Btn featured onClick={onSubmit}>
            등록
          </S.Btn>
          <S.Btn onClick={onCancel}>취소</S.Btn>
        </S.SubmitBtnsBox>
      </S.SignUpLayoutCol>
    </PcPageWrap>
  );
}

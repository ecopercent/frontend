import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <S.SignUpLayoutCol>
      <S.InputList>
        <S.InputItem>
          <div
            style={{
              width: "130px",
              height: "130px",
              backgroundColor: "gray",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            {/* TODO: 프로필 이미지 input은 이미지 서버 완료 후에 재작업 */}
            이미지 Input
          </div>
        </S.InputItem>
        <S.InputItem>
          <S.Label htmlFor="nickname">
            닉네임 <span style={{ color: "red" }}>*</span>
          </S.Label>
          <S.Input id="nickname" type="text" />
          <S.Btn
            type="button"
            onClick={() => {
              // TODO: 닉네임 중복확인 api, 닉네임 확인 처리
              return alert("닉네임 중복 확인 api");
            }}
          >
            중복확인
          </S.Btn>
        </S.InputItem>
        <S.InputItem>또 뭐 넣어야하지....</S.InputItem>
      </S.InputList>
      <S.SubmitBtnsBox>
        <S.Btn
          featured
          onClick={() => {
            // TODO: 입력 유효성 검사
            // TODO: 가입 완료 페이지 구현
            return alert("입력 유효성 검사 > 가입 완료 페이지로..");
          }}
        >
          등록
        </S.Btn>
        <S.Btn
          onClick={() => {
            // TODO: 취소 확인 모달 구현
            alert(
              "(모달) 입력중인 정보는 저장되지 않습니다. 돌아가시겠습니까?"
            );
            return navigate(-1);
          }}
        >
          취소
        </S.Btn>
      </S.SubmitBtnsBox>
    </S.SignUpLayoutCol>
  );
}

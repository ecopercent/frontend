import React from "react";
import * as S from "./style";

export default function SignUpUser() {
  const validateNickname = () => {
    // TODO: 닉네임 중복확인 api, 닉네임 확인 처리
    return alert("닉네임 중복 확인 api");
  };

  return (
    <>
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
        <S.Btn type="button" onClick={validateNickname}>
          중복확인
        </S.Btn>
      </S.InputItem>
      <S.InputItem>
        <S.TextareaHr />
        <S.Label htmlFor="msg">소개</S.Label>
        <S.Textarea id="msg" type="textarea" />
      </S.InputItem>
    </>
  );
}

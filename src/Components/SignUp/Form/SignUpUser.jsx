import React, { forwardRef } from "react";
import * as S from "./style";

function SignUpUser(
  {
    userInput,
    setUserInput,
    nicknameIsValid,
    setNicknameIsValid,
    warningText,
    setWarningText,
  },
  ref
) {
  const validateNickname = () => {
    // TODO: 닉네임 중복확인 api 요청 하고 결과에 따른 로직 추가
    setNicknameIsValid(true);
    setWarningText(null);
    if (nicknameIsValid) setNicknameIsValid(false);
    alert("중복 확인 API 호출");
  };

  const lengthSliceInKorean = (e) => {
    if (e.target.value.length > e.target.maxLength)
      e.target.value = e.target.value.slice(0, e.target.maxLength);
  };

  const handleNicknameInput = (e) => {
    lengthSliceInKorean(e);
    setUserInput({ ...userInput, nickname: e.target.value });
    if (nicknameIsValid) setNicknameIsValid(false);
    if (warningText) setWarningText(null);
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
        <S.Label>
          닉네임 <span style={{ color: "red" }}>*</span>
        </S.Label>
        <S.Input
          ref={ref}
          minLength={2}
          maxLength={8}
          type="text"
          value={userInput.nickname}
          onChange={handleNicknameInput}
        />
        <S.Btn
          type="button"
          onClick={validateNickname}
          disabled={nicknameIsValid || userInput.nickname.length <= 1}
        >
          중복확인
        </S.Btn>
        {nicknameIsValid && <S.ValidCheckIcon />}
        {warningText && <S.WarningText>{warningText}</S.WarningText>}
      </S.InputItem>
      <S.InputItem>
        <S.TextareaHr />
        <S.Label>소개</S.Label>
        <S.Textarea
          type="textarea"
          maxLength={35}
          value={userInput.profileMessage}
          onChange={(e) => {
            lengthSliceInKorean(e);
            setUserInput({ ...userInput, profileMessage: e.target.value });
          }}
        />
        <S.NoticeText msg>{userInput.profileMessage.length}/35</S.NoticeText>
      </S.InputItem>
    </>
  );
}

export default forwardRef(SignUpUser);

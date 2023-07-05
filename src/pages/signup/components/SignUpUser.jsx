import React, { forwardRef } from "react";
import useImgInput from "@hooks/useImgInput";
import * as S from "./style";

function SignUpUser(
  { userInput, setUserInput, warningText, setWarningText, setUserImg },
  ref
) {
  const ImgInputForm = useImgInput({
    prevImg: null,
    setUploadedFile: setUserImg,
    type: "signUpUser",
  });

  const lengthSliceInKorean = (e) => {
    if (e.target.value.length > e.target.maxLength)
      e.target.value = e.target.value.slice(0, e.target.maxLength);
  };

  const handleNicknameInput = (e) => {
    lengthSliceInKorean(e);
    setUserInput({ ...userInput, nickname: e.target.value });
    if (warningText) setWarningText(null);
  };

  const handleMessageInput = (e) => {
    lengthSliceInKorean(e);
    setUserInput({ ...userInput, profileMessage: e.target.value });
  };

  return (
    <>
      <ImgInputForm />
      <S.InputItem>
        <S.Label>
          닉네임 <span style={{ color: "red" }}>*</span>
        </S.Label>
        <S.Input
          ref={ref}
          maxLength={8}
          type="text"
          value={userInput.nickname}
          onChange={handleNicknameInput}
        />
        {warningText && <S.WarningText>{warningText}</S.WarningText>}
      </S.InputItem>
      <S.InputItem>
        <S.TextareaHr />
        <S.Label>소개</S.Label>
        <S.Textarea
          type="textarea"
          maxLength={35}
          value={userInput.profileMessage}
          onChange={handleMessageInput}
        />
        <S.NoticeText msg>{userInput.profileMessage.length}/35</S.NoticeText>
      </S.InputItem>
    </>
  );
}

export default forwardRef(SignUpUser);

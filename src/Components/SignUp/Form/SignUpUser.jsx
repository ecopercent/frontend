import React from "react";
import * as S from "./style";
import { nicknameCheck } from "../../../Api/user";

export default function SignUpUser({
  userInput,
  setUserInput,
  nicknameIsValid,
  setNicknameIsValid,
  warningText,
  setWarningText,
}) {
  const validateNickname = async (e) => {
    // TODO: 닉네임 중복확인 api 요청 하고 결과에 따른 로직 추가
    e.preventDefault();
    try {
      const validateResult = await nicknameCheck(userInput.nickname);
      if (validateResult === 200) {
        // 이미 있는 닉네임일때 인풋값을 지울까 말까
        // 경고창 대신 모달로 띄워줄까 말까
        alert("이미 사용 중인 닉네임입니다.\n다른 닉네임을 사용해 주세요.");
        setWarningText("다른 닉네임을 사용해 주세요.");
      } else if (validateResult === 404) {
        // 성공했을때 성공한 닉네임을 사용할지 말지 모달로 선택하게 할까 말까
        setNicknameIsValid(true);
        setWarningText(null);
        if (nicknameIsValid) setNicknameIsValid(false);
      } else {
        // 닉네임 정책 제대로 정해야할듯합니다. ex) 빈공백, /조합, \ 조합  # 등
        alert("닉네임을 확인해주세요.");
      }
    } catch (err) {
      console.log("server error");
    }
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

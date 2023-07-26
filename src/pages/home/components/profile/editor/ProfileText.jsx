import React, { forwardRef } from "react";
import * as S from "./style";

function ProfileText({ userData, setUserData }, ref) {
  return (
    <S.ProfileTextBox>
      <S.ProfileText
        value={userData.nickname}
        onChange={(e) => {
          e.preventDefault();
          const inputException = /((?![ㄱ-ㅎ|ㅏ-ㅣ|가-힣]|[a-zA-Z]).)|\n|$/g;
          if (e.target.value.length > 8)
            e.target.value = e.target.value.slice(0, 8);
          e.target.value = e.target.value.replace(inputException, "");
          setUserData({ ...userData, nickname: e.target.value });
        }}
        rows={1}
        maxLength={8}
        ref={ref}
      />
      <S.ProfileTextarea
        value={userData.profileMessage}
        onChange={(e) => {
          setUserData({ ...userData, profileMessage: e.target.value });
        }}
        rows={4}
        maxLength={35}
      />
    </S.ProfileTextBox>
  );
}

export default forwardRef(ProfileText);

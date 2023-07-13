import React from "react";
import * as S from "./style";

export default function ProfileText({ userData, setUserData }) {
  return (
    <S.ProfileTextForm>
      <S.ProfileTextarea
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
      />
      <S.ProfileTextarea
        value={userData.profileMessage}
        onChange={(e) => {
          setUserData({ ...userData, profileMessage: e.target.value });
        }}
        rows={4}
        maxLength={35}
      />
    </S.ProfileTextForm>
  );
}

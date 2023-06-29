import React from "react";
import * as S from "./style";

export default function ProfileText({ userData, setUserData }) {
  return (
    <S.ProfileTextForm>
      <S.ProfileTextarea
        value={userData.nickname}
        onChange={(e) => {
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

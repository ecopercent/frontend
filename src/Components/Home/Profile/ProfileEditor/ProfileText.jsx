import React from "react";
import * as S from "./style";

export default function ProfileText({ user, setUser, isMobile }) {
  return (
    <S.ProfileTextForm isMobile={isMobile}>
      <S.ProfileTextarea
        value={user.nickname}
        onChange={(e) => {
          setUser({ ...user, nickname: e.target.value });
        }}
        rows={1}
        maxLength={8}
      />
      <S.ProfileTextarea
        value={user.profileMessage}
        onChange={(e) => {
          setUser({ ...user, profileMessage: e.target.value });
        }}
        rows={isMobile ? 4 : 3}
        maxLength={35}
      />
    </S.ProfileTextForm>
  );
}

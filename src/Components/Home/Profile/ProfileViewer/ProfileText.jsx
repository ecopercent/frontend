import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../../Api/user";
import * as S from "./style";

export default function ProfileText({ userId, isMobile }) {
  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return getUser();
    },
  });

  const user = userQuery.data;

  return (
    <S.ProfileTextContainer isMobile={isMobile}>
      <S.ProfileTextNickname>
        {userQuery.isLoading || userQuery.isError ? "" : user.nickname}
      </S.ProfileTextNickname>
      <S.ProfileTextMessage>
        {userQuery.isLoading || userQuery.isError ? "" : user.profileMessage}
      </S.ProfileTextMessage>
    </S.ProfileTextContainer>
  );
}

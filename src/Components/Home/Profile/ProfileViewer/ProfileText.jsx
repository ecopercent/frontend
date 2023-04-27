import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../../Api/user";
import * as S from "./style";

export default function ProfileText({ isMobile }) {
  const userQuery = useQuery({
    queryKey: ["user"],
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

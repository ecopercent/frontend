import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@api/user";
import * as S from "./style";

export default function ProfileText() {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser();
    },
  });

  const user = userQuery.data;

  return (
    <S.ProfileTextContainer>
      <S.ProfileTextNickname>{user?.nickname}</S.ProfileTextNickname>
      <S.ProfileTextMessage>{user?.profileMessage}</S.ProfileTextMessage>
    </S.ProfileTextContainer>
  );
}

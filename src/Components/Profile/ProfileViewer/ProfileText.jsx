import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../Api/user";
import * as S from "./style";

export default function ProfileText({ userId }) {
  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  const user = userQuery.data;

  return (
    <S.ProfileTextContainer>
      <p className="ProfileText__text-nickname font-body-bold">
        {userQuery.isLoading || userQuery.isError ? "" : user.nickname}
      </p>
      <p className="ProfileText__text-msg font-body-regular">
        {userQuery.isLoading || userQuery.isError ? "" : user.profileMessage}
      </p>
    </S.ProfileTextContainer>
  );
}

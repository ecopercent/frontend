import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "src/api/user";
import * as S from "./style";

export default function ProfileImg() {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser();
    },
  });

  return (
    <S.ProfileImg
      src={userQuery.data?.profileImage || "/img/default_user.png"}
      alt="user profile"
    />
  );
}

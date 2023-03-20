import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../../Api/user";
import * as S from "./style";

export default function ProfileImg({ userId }) {
  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  const user = userQuery.data;

  return (
    <S.ProfileImg
      src={
        userQuery.isLoading || userQuery.isError || user.profileImage === null
          ? "/img/userLoadingImage.png"
          : user.profileImage
      }
      alt="user profile"
    />
  );
}

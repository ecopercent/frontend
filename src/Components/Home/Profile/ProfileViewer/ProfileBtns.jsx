import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../../Api/user";
import * as S from "./style";

export default function ProfileBtns({ handleClick }) {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser();
    },
  });

  return (
    <S.ProfileButtonLayout>
      <S.ProfileEditButton
        type="button"
        onClick={handleClick}
        disabled={userQuery.isLoading || userQuery.isError}
      >
        프로필 편집
      </S.ProfileEditButton>
    </S.ProfileButtonLayout>
  );
}

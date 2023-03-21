import React, { useState } from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useMediaQuery } from "react-responsive";
import { getUser, patchUser } from "../../../../Api/user";
import ProfileImg from "./ProfileImg";
import ProfileText from "./ProfileText";
import ProfileBtns from "./ProfileBtns";
import * as S from "./style";

export default function ProfileEditor({ userId, setIsEditing }) {
  const isMobile = useMediaQuery({
    query: "(max-width:470px)",
  });
  const queryClient = useQueryClient();
  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  if (userQuery.isError) console.log(JSON.stringify(userQuery.error));

  const [localUser, setLocalUser] = useState({
    nickname: userQuery.data.nickname,
    profileMessage: userQuery.data.profileMessage,
    profileImage: userQuery.data.profileImage,
  });

  const profileEditMutation = useMutation({
    mutationFn: patchUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user", userId], data);
      queryClient.invalidateQueries(["user", userId]);
    },
  });

  function handleSubmit() {
    profileEditMutation.mutate({
      id: userId,
      nick: localUser.nickname,
      msg: localUser.profileMessage,
      img: localUser.profileImage,
    });
  }

  return (
    <S.ProfileContainer isMobile={isMobile}>
      <S.ProfileImgTextWrapper isMobile={isMobile}>
        <ProfileImg user={localUser} setUser={setLocalUser} />
        <ProfileText
          user={localUser}
          setUser={setLocalUser}
          isMobile={isMobile}
        />
      </S.ProfileImgTextWrapper>
      <ProfileBtns
        setIsEditing={setIsEditing}
        handleSubmit={() => {
          return handleSubmit();
        }}
      />
    </S.ProfileContainer>
  );
}
import React, { useState } from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { getUser, patchUser } from "src/api/user";
import ProfileImg from "./ProfileImg";
import ProfileText from "./ProfileText";
import ProfileBtns from "./ProfileBtns";
import * as S from "../style";

export default function ProfileEditor({ setIsEditing }) {
  const queryClient = useQueryClient();
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser();
    },
  });

  if (userQuery.isError) console.log(JSON.stringify(userQuery.error));

  const [userData, setUserData] = useState({
    nickname: userQuery.data.nickname,
    profileMessage: userQuery.data.profileMessage,
  });
  const [userImgFile, setUserImgFile] = useState(userQuery.data.profileImage);

  const profileEditMutation = useMutation({
    mutationFn: patchUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      queryClient.refetchQueries(["user"]);
      setIsEditing();
    },
  });

  function handleSubmit() {
    const formData = new FormData();
    formData.append(
      "userData",
      new Blob([JSON.stringify(userData)], { type: "application/json" })
    );
    formData.append(
      "profileImage",
      typeof userImgFile === "object" ? userImgFile : null
    );
    profileEditMutation.mutate(formData);
  }

  return (
    <S.ProfileContainer>
      <S.ProfileImgTextWrapper>
        <ProfileImg imgFile={userImgFile} setImgFile={setUserImgFile} />
        <ProfileText userData={userData} setUserData={setUserData} />
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

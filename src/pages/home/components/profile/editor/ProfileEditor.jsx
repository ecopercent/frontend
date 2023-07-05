import React, { useEffect, useRef, useState } from "react";
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
    queryFn: getUser,
  });

  if (userQuery.isError) console.log(JSON.stringify(userQuery.error));

  const [userData, setUserData] = useState({
    nickname: userQuery.data.nickname,
    profileMessage: userQuery.data.profileMessage,
  });
  const nicknameRef = useRef();
  const userImgFile = useRef(userQuery.data.profileImage);

  const profileEditMutation = useMutation({
    mutationFn: patchUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      queryClient.refetchQueries(["user"]);
      setIsEditing();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.nickname.trim().length < 2) {
      nicknameRef.current.focus();
      return alert("닉네임을 2자 이상 입력하세요.");
    }

    const formData = new FormData();
    formData.append(
      "userData",
      new Blob([JSON.stringify(userData)], { type: "application/json" })
    );
    formData.append(
      "profileImage",
      typeof userImgFile === "object" ? userImgFile : null
    );
    return profileEditMutation.mutate(formData);
  };

  useEffect(() => {
    nicknameRef.current.focus();
  }, []);

  return (
    <S.ProfileForm>
      <S.ProfileImgTextWrapper>
        <ProfileImg
          imgFile={userImgFile.current}
          setImgFile={(newImg) => {
            userImgFile.current = newImg;
          }}
        />
        <ProfileText
          userData={userData}
          setUserData={setUserData}
          ref={nicknameRef}
        />
      </S.ProfileImgTextWrapper>
      <ProfileBtns setIsEditing={setIsEditing} handleSubmit={handleSubmit} />
    </S.ProfileForm>
  );
}

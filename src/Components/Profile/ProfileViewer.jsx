import React from "react";
import { useQuery } from "@tanstack/react-query";
import "./style.css";
import getUser from "../../Api/getUser";

export default function ProfileViewer({ userId, setIsEditing }) {
  return (
    <div className="ProfileImg-ProfileText-container">
      <ProfileImg userId={userId} />
      <ProfileText userId={userId} />
      <ProfileBtns userId={userId} handleClick={setIsEditing} />
    </div>
  );
}

function ProfileImg({ userId }) {
  const profileQuery = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  const user = profileQuery.data;

  return (
    <img
      className="ProfileImg__img"
      src={
        profileQuery.isLoading || profileQuery.isError
          ? "/img/userLoadingImage.png"
          : user.profileImage
      }
      alt="User profile"
    />
  );
}

function ProfileText({ userId }) {
  const profileQuery = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  const user = profileQuery.data;

  return (
    <div className="ProfileText-container">
      <p className="ProfileText__text-nickname font-body-bold">
        {profileQuery.isLoading || profileQuery.isError ? "" : user.nickname}
      </p>
      <p className="ProfileText__text-msg font-body-regular">
        {profileQuery.isLoading || profileQuery.isError
          ? ""
          : user.profileMessage}
      </p>
    </div>
  );
}

function ProfileBtns({ userId, handleClick }) {
  const profileQuery = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  return (
    <div className="ProfileBtns-container">
      <button
        type="button"
        className="ProfileBtns__btn font-caption1-regular"
        onClick={handleClick}
        disabled={profileQuery.isLoading || profileQuery.isError}
      >
        프로필 편집
      </button>
    </div>
  );
}

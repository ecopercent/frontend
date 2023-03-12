import React from "react";
import { useQuery } from "@tanstack/react-query";
import "./style.css";
import { getUser } from "../../Api/user";

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
  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  const user = userQuery.data;

  return (
    <img
      className="ProfileImg__img"
      src={
        userQuery.isLoading || userQuery.isError
          ? "/img/userLoadingImage.png"
          : user.profileImage
      }
      alt="User profile"
    />
  );
}

function ProfileText({ userId }) {
  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  const user = userQuery.data;

  return (
    <div className="ProfileText-container">
      <p className="ProfileText__text-nickname font-body-bold">
        {userQuery.isLoading || userQuery.isError ? "" : user.nickname}
      </p>
      <p className="ProfileText__text-msg font-body-regular">
        {userQuery.isLoading || userQuery.isError ? "" : user.profileMessage}
      </p>
    </div>
  );
}

function ProfileBtns({ userId, handleClick }) {
  const userQuery = useQuery({
    queryKey: ["user", userId],
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
        disabled={userQuery.isLoading || userQuery.isError}
      >
        프로필 편집
      </button>
    </div>
  );
}

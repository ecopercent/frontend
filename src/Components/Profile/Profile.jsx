import React, { useState } from "react";
import "./style.css";

// GET
const initialUser = {
  nickname: "유저닉네임",
  profileImage: "https://avatars.githubusercontent.com/u/75291932?v=4",
  profileMessage: "Hello Ecopercent!",
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);
  const savedUser = { ...initialUser };

  return (
    <div>
      <div>
        <img src={user.profileImage} alt="User profile" />
        <ProfileText isEditing={isEditing} setUser={setUser} user={user} />
      </div>
      <ProfileBtns
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setUser={setUser}
        savedUser={savedUser}
      />
    </div>
  );
}

function ProfileText({ isEditing, setUser, user }) {
  return (
    <div>
      {isEditing ? (
        <form>
          <input
            value={user.nickname}
            onChange={(e) => {
              setUser({ ...user, nickname: e.target.value });
            }}
          />
          <input
            value={user.profileMessage}
            onChange={(e) => {
              setUser({ ...user, profileMessage: e.target.value });
            }}
          />
        </form>
      ) : (
        <>
          <p>{user.nickname}</p>
          <p>{user.profileMessage}</p>
        </>
      )}
    </div>
  );
}

function ProfileBtns({ isEditing, setIsEditing, setUser, savedUser }) {
  return (
    <div>
      <button
        type="button"
        className={`btn-edit ${isEditing ? "btn-replace" : ""}`}
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      >
        프로필 편집
      </button>
      <button
        type="submit"
        className={`btn-edit ${isEditing ? "" : "btn-replace"}`}
        onClick={() => {
          setIsEditing(!isEditing);
          // POST
        }}
      >
        완료
      </button>
      <button
        type="button"
        className={`btn-cancel ${isEditing ? "" : "hidden"}`}
        onClick={() => {
          setIsEditing(!isEditing);
          setUser(savedUser);
        }}
      >
        취소
      </button>
    </div>
  );
}

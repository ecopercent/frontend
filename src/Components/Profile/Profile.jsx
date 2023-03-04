import React, { useState } from "react";
import "./style.css";

// GET
const initialUser = {
  nickname: "유저닉네임",
  profileImage: "https://avatars.githubusercontent.com/u/75291932?v=4",
  profileMessage: "Hello Ecopercent! ㅁㄴㅇㄹㅇㄴㄹㅇㄴㄹㄴㅇㅁㄹㅁ",
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);
  const savedUser = { ...initialUser };

  return (
    <div className="Profile">
      <div className="ProfileImg-ProfileText-container">
        <ProfileImg
          isEditing={isEditing}
          user={user}
          setImg={(src) => {
            setUser({ ...user, profileImage: src });
          }}
        />
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

function ProfileImg({ isEditing, user, setImg }) {
  function onUpload(e) {
    const uploadedImg = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(uploadedImg);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImg(reader.result || null);
        resolve();
      };
    });
  }

  if (isEditing) {
    return (
      <form>
        <label htmlFor="profile-img-input">
          <img
            className="ProfileImg__img"
            src={user.profileImage}
            alt="User profile preview"
          />
        </label>
        <input
          className="ProfileImg__form__input"
          id="profile-img-input"
          type="file"
          accept="image/*"
          src={user.profileImage}
          onChange={(e) => {
            return onUpload(e);
          }}
        />
      </form>
    );
  }
  return (
    <img
      className="ProfileImg__img"
      src={user.profileImage}
      alt="User profile"
    />
  );
}

function ProfileText({ isEditing, setUser, user }) {
  if (isEditing)
    return (
      <form className="ProfileText-container ProfileText-container--editing">
        <input
          type="text"
          className="ProfileText__input font-input"
          value={user.nickname}
          onChange={(e) => {
            setUser({ ...user, nickname: e.target.value });
          }}
        />
        <textarea
          className="ProfileText__textarea font-input"
          value={user.profileMessage}
          onChange={(e) => {
            setUser({ ...user, profileMessage: e.target.value });
          }}
          maxLength="26"
        />
      </form>
    );
  return (
    <div className="ProfileText-container">
      <p className="ProfileText__text-nickname font-bold-body">
        {user.nickname}
      </p>
      <p className="ProfileText__text-msg font-regular-body">
        {user.profileMessage}
      </p>
    </div>
  );
}

function ProfileBtns({ isEditing, setIsEditing, setUser, savedUser }) {
  return (
    <div className="ProfileBtns-container">
      <button
        type="button"
        className={`ProfileBtns__btn font-caption1-regular ${
          isEditing ? "ProfileBtns__btn--replaced" : ""
        }`}
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      >
        프로필 편집
      </button>
      <button
        type="submit"
        className={`ProfileBtns__btn ProfileBtns__btn--featured font-caption1-bold ${
          isEditing ? "" : "ProfileBtns__btn--replaced"
        }`}
        onClick={() => {
          setIsEditing(!isEditing);
          // POST
        }}
      >
        완료
      </button>
      <button
        type="button"
        className={`ProfileBtns__btn font-caption1-regular ${
          isEditing ? "" : "ProfileBtns__btn--hidden"
        }`}
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

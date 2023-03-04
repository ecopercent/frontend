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
            className="profile-img"
            src={user.profileImage}
            alt="User profile preview"
          />
        </label>
        <input
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
    <img className="profile-img" src={user.profileImage} alt="User profile" />
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

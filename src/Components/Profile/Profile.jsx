import React, { useState } from "react";
import "./style.css";

const user = {
	nickname: "유저닉네임",
	profileImage: "https://avatars.githubusercontent.com/u/75291932?v=4",
	profileMessage: "Hello Ecopercent!"
  };

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(user.nickname);
  const [message, setMessage] = useState(user.profileMessage);

  return (
    <>
      <ProfileImage src={user.profileImage} />
      <ProfileEditButton isEditing={isEditing} handleEdit={() => {setIsEditing(!isEditing);}} />
      <ProfileMessage
        isEditing={isEditing}
        nickname={nickname}
        setNickname={setNickname}
        message={message}
        setMessage={setMessage}
      />
    </>
  );
}

function ProfileImage({ isEditing, src }) {
    return (
      <img className="profile-image" src={src} alt={isEditing ? "user_profileImage_edit" : "user_profileImage"} />
    );
}

function ProfileEditButton({ isEditing, handleEdit }) {
  return <button onClick={handleEdit}>{isEditing ? "완료" : "프로필 편집"}</button>;
}

function ProfileMessage({ isEditing, nickname, setNickname, message, setMessage }) {
  if (isEditing)
    return (
      <form>
        <input
          type="text"
          minLength="1"
          maxLength="8"
          value={nickname}
          onChange={(e) => {setNickname(e.target.value);}}
        />
        <input
          type="text"
          maxLength="30"
          value={message}
          onChange={(e) => {setMessage(e.target.value);}}
        />
      </form>
    );
return (
	<>
	<p>{nickname}</p>
	<p>{message}</p>
	</>
);
}

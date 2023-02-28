import { useState } from "react";

export default function Profile({ user }) {
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!edit);
  }

  return (
    <>
      <ProfileImage src={user.profile_image} />
      <ProfileEditButton />
      <ProfileMessage nickname={user.nickname} text={user.profile_message} />
    </>
  );
}

function ProfileImage({ src }) {
  return <img src={src} alt="user_profile_image" />;
}

function ProfileEditButton() {
  return <button>프로필 편집</button>;
}

function ProfileMessage({ nickname, text }) {
  return (
    <>
      <p>{nickname}</p>
      <p>{text}</p>
    </>
  );
}

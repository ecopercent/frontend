import { useState } from "react";
import "./style.css";

export default function Profile({ user }) {
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!edit);
  }

  return (
    <>
      <ProfileImage src={user.profile_image} />
      <ProfileEditButton edit={edit} handleEdit={handleEdit} />
      <ProfileMessage
        edit={edit}
        nickname={user.nickname}
        text={user.profile_message}
      />
    </>
  );
}

function ProfileImage({ edit, src }) {
  if (edit)
    return (
      <img className="profile-image" src={src} alt="user_profile_image_edit" />
    );
  else
    return <img className="profile-image" src={src} alt="user_profile_image" />;
}

function ProfileEditButton({ edit, handleEdit }) {
  if (edit) return <button onClick={handleEdit}>완료</button>;
  else return <button onClick={handleEdit}>프로필 편집</button>;
}

function ProfileMessage({ edit, nickname, text }) {
  if (edit)
    return (
      <>
        <p>편집중!</p>
        <p>{nickname}</p>
        <p>{text}</p>
      </>
    );
  else
    return (
      <>
        <p>{nickname}</p>
        <p>{text}</p>
      </>
    );
}

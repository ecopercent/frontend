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
  let buttonMessage = "프로필 편집";
  if (edit) buttonMessage = "완료";
  return <button onClick={handleEdit}>{buttonMessage}</button>;
}

function ProfileMessage({ edit, nickname, text }) {
  if (edit)
    return (
      <form>
        <input type="text" minLength="1" maxLength="8" value={nickname} />
        <input type="text" maxLength="30" value={text} />
      </form>
    );
  else
    return (
      <>
        <p>{nickname}</p>
        <p>{text}</p>
      </>
    );
}

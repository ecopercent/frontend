import { useState } from "react";
import "./style.css";

export default function Profile({ user }) {
  const [edit, setEdit] = useState(false);
  const [nickname, setNickname] = useState(user.nickname);
  const [message, setMessage] = useState(user.profileMessage);

  function handleEdit() {
    setEdit(!edit);
  }

  return (
    <>
      <ProfileImage src={user.profileImage} />
      <ProfileEditButton edit={edit} handleEdit={handleEdit} />
      <ProfileMessage
        edit={edit}
        nickname={nickname}
        setNickname={setNickname}
        message={message}
        setMessage={setMessage}
      />
    </>
  );
}

function ProfileImage({ edit, src }) {
  if (edit)
    return (
      <img className="profile-image" src={src} alt="user_profileImage_edit" />
    );
  else
    return <img className="profile-image" src={src} alt="user_profileImage" />;
}

function ProfileEditButton({ edit, handleEdit }) {
  let buttonMessage = "프로필 편집";
  if (edit) buttonMessage = "완료";
  return <button onClick={handleEdit}>{buttonMessage}</button>;
}

function ProfileMessage({ edit, nickname, setNickname, message, setMessage }) {
  function handleNickname(e) {
    setNickname(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  if (edit)
    return (
      <form>
        <input
          type="text"
          minLength="1"
          maxLength="8"
          value={nickname}
          onChange={handleNickname}
        />
        <input
          type="text"
          maxLength="30"
          value={message}
          onChange={handleMessage}
        />
      </form>
    );
  else
    return (
      <>
        <p>{nickname}</p>
        <p>{message}</p>
      </>
    );
}

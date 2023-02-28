// user -> 유저 데이터 받아온 객체
export default function Profile({ user }) {
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

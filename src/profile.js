// user -> 유저 데이터 받아온 객체
export default function Profile({ user }) {
  return (
    <>
      <ProfileImage src={user.profile_image} />
      {/* 프로필 편집 버튼 */}
      {/* 텍스트 단락 */}
    </>
  );
}

function ProfileImage({ src }) {
  return <img src={src} alt="user_profile_image" />;
}

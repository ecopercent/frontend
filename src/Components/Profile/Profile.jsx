import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "./style.css";

// GET
// const initialUser = {
//   nickname: "유저닉네임",
//   profileImage: "https://avatars.githubusercontent.com/u/75291932?v=4",
//   profileMessage: "Hello Ecopercent! ㅁㄴㅇㄹㅇㄴㄹㅇㄴㄹㄴㅇㅁㄹㅁ",
// };

function getUser(id) {
  return axios.get(`/users/${id}`).then((res) => {
    return res.data;
  });
}

export default function Profile() {
  const userId = 1;

  //   const [isEditing, setIsEditing] = useState(false);
  //   const [user, setUser] = useState(null);
  const profileQuery = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  if (profileQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (profileQuery.isError) {
    return <h1>{JSON.stringify(profileQuery.error)}</h1>;
  }

  return (
    <div className="Profile">
      <div className="ProfileImg-ProfileText-container">
        <ProfileImg
          //   isEditing={isEditing}
          user={profileQuery.data}
          //   setImg={(src) => {
          // setUser({ ...profileQuery.data, profileImage: src });
          //   }}
        />
        <ProfileText user={profileQuery.data} />
      </div>
      {/* <ProfileBtns
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        /> */}
    </div>
  );
}

function ProfileImg({ user }) {
  //   const [isUploaded, setIsUploaded] = useState(false);
  //   function onUpload(e) {
  //     const uploadedImg = e.target.files[0];
  //     const reader = new FileReader();

  //     reader.readAsDataURL(uploadedImg);
  //     return new Promise((resolve) => {
  //       reader.onload = () => {
  //         setImg(reader.result || null);
  //         setIsUploaded(true);
  //         resolve();
  //       };
  //     });
  //   }

  //   if (isEditing) {
  //     return (
  //       <form>
  //         <label htmlFor="profile-img-input">
  //           <div
  //             className={`ProfileImg__form__div ${
  //               isUploaded ? "ProfileImg__form__img--uploaded" : ""
  //             }`}
  //           />
  //           <img
  //             className={`ProfileImg__form__img--overlay ${
  //               isUploaded ? "ProfileImg__form__img--uploaded" : ""
  //             }`}
  //             src="https://i.ibb.co/L17G9ms/camera-overlay.png"
  //             alt="profile edit"
  //           />
  //           <img
  //             className="ProfileImg__img ProfileImg__form__img"
  //             src={user.profileImage}
  //             alt="User profile preview"
  //           />
  //         </label>
  //         <input
  //           className="ProfileImg__form__input"
  //           id="profile-img-input"
  //           type="file"
  //           accept="image/*"
  //           src={user.profileImage}
  //           onChange={(e) => {
  //             return onUpload(e);
  //           }}
  //         />
  //       </form>
  //     );
  //   }
  return (
    <img
      className="ProfileImg__img"
      src={user.profileImage}
      alt="User profile"
    />
  );
}

function ProfileText({ user }) {
  //   if (isEditing)
  //     return (
  //       <form className="ProfileText-container ProfileText-container--editing">
  //         <textarea
  //           className="ProfileText__textarea font-input"
  //           value={user.nickname}
  //           onChange={(e) => {
  //             setUser({ ...user, nickname: e.target.value });
  //           }}
  //           rows="1"
  //           maxLength="8"
  //         />
  //         <textarea
  //           className="ProfileText__textarea font-input"
  //           value={user.profileMessage}
  //           onChange={(e) => {
  //             setUser({ ...user, profileMessage: e.target.value });
  //           }}
  //           rows="3"
  //           maxLength="50"
  //         />
  //       </form>
  //     );
  return (
    <div className="ProfileText-container">
      <p className="ProfileText__text-nickname font-body-bold">
        {user.nickname}
      </p>
      <p className="ProfileText__text-msg font-body-regular">
        {user.profileMessage}
      </p>
    </div>
  );
}

// function ProfileBtns({ isEditing, setIsEditing, setUser, savedUser }) {
//   return (
//     <div className="ProfileBtns-container">
//       <button
//         type="button"
//         className={`ProfileBtns__btn font-caption1-regular ${
//           isEditing ? "ProfileBtns__btn--replaced" : ""
//         }`}
//         onClick={() => {
//           setIsEditing(!isEditing);
//         }}
//       >
//         프로필 편집
//       </button>
//       <button
//         type="submit"
//         className={`ProfileBtns__btn ProfileBtns__btn--featured font-caption1-bold ${
//           isEditing ? "" : "ProfileBtns__btn--replaced"
//         }`}
//         onClick={() => {
//           setIsEditing(!isEditing);
//           // POST
//         }}
//       >
//         완료
//       </button>
//       <button
//         type="button"
//         className={`ProfileBtns__btn font-caption1-regular ${
//           isEditing ? "" : "ProfileBtns__btn--hidden"
//         }`}
//         onClick={() => {
//           setIsEditing(!isEditing);
//           setUser(savedUser);
//         }}
//       >
//         취소
//       </button>
//     </div>
//   );
// }

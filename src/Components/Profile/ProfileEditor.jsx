import React, { useState } from "react";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import getUser from "../../Api/getUser";

export default function ProfileEditor({ userId, handleClick }) {
  const profileQuery = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  const [localUser, setLocalUser] = useState({
    nickname: profileQuery.data.nickname,
    profileMessage: profileQuery.data.profileMessage,
    profileImage: profileQuery.data.profileImage,
  });

  if (profileQuery.isError) console.log(JSON.stringify(profileQuery.error));

  return (
    <div className="ProfileImg-ProfileText-container">
      <ProfileImg
        img={localUser.profileImage}
        setImg={(src) => {
          setLocalUser({ ...localUser, ProfileImage: src });
        }}
      />
      <ProfileText user={localUser} setUser={setLocalUser} />
      <ProfileBtns handleClick={handleClick} />
    </div>
  );
}

function ProfileImg({ img, setImg }) {
  const [isUploaded, setIsUploaded] = useState(false);

  function onUpload(e) {
    const uploadedImg = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(uploadedImg);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImg(reader.result || null);
        setIsUploaded(true);
        resolve();
      };
    });
  }

  return (
    <form>
      <label htmlFor="profile-img-input">
        <div
          className={`ProfileImg__form__div ${
            isUploaded ? "ProfileImg__form__img--uploaded" : ""
          }`}
        />
        <img
          className={`ProfileImg__form__img--overlay ${
            isUploaded ? "ProfileImg__form__img--uploaded" : ""
          }`}
          src="https://i.ibb.co/L17G9ms/camera-overlay.png"
          alt="profile edit"
        />
        <img
          className="ProfileImg__img ProfileImg__form__img"
          src={img}
          alt="User profile preview"
        />
      </label>
      <input
        className="ProfileImg__form__input"
        id="profile-img-input"
        type="file"
        accept="image/*"
        src={img}
        onChange={(e) => {
          return onUpload(e);
        }}
      />
    </form>
  );
}

function ProfileText({ user, setUser }) {
  return (
    <form className="ProfileText-container ProfileText-container--editing">
      <textarea
        className="ProfileText__textarea font-input"
        value={user.nickname}
        onChange={(e) => {
          setUser({ ...user, nickname: e.target.value });
        }}
        rows="1"
        maxLength="8"
      />
      <textarea
        className="ProfileText__textarea font-input"
        value={user.profileMessage}
        onChange={(e) => {
          setUser({ ...user, profileMessage: e.target.value });
        }}
        rows="3"
        maxLength="50"
      />
    </form>
  );
}

function ProfileBtns({ handleClick }) {
  return (
    <div className="ProfileBtns-container">
      <button
        type="submit"
        className="ProfileBtns__btn ProfileBtns__btn--featured font-caption1-bold"
        onClick={handleClick}
        // POST 추가
      >
        완료
      </button>
      <button
        type="button"
        className="ProfileBtns__btn font-caption1-regular"
        onClick={handleClick}
      >
        취소
      </button>
    </div>
  );
}

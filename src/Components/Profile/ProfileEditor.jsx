import React, { useState } from "react";
import "./style.css";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import imageCompression from "browser-image-compression";
import { getUser, patchUser } from "../../Api/user";

export default function ProfileEditor({ userId, setIsEditing }) {
  const queryClient = useQueryClient();
  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  if (userQuery.isError) console.log(JSON.stringify(userQuery.error));

  const [localUser, setLocalUser] = useState({
    nickname: userQuery.data.nickname,
    profileMessage: userQuery.data.profileMessage,
    profileImage: userQuery.data.profileImage,
  });

  const profileEditMutation = useMutation({
    mutationFn: patchUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user", userId], data);
      queryClient.invalidateQueries(["user", userId]);
    },
  });

  function handleSubmit() {
    profileEditMutation.mutate({
      id: userId,
      nick: localUser.nickname,
      msg: localUser.profileMessage,
      img: localUser.profileImage,
    });
  }

  return (
    <div className="ProfileImg-ProfileText-container">
      <ProfileImg user={localUser} setUser={setLocalUser} />
      <ProfileText user={localUser} setUser={setLocalUser} />
      <ProfileBtns
        setIsEditing={setIsEditing}
        handleSubmit={() => {
          return handleSubmit();
        }}
      />
    </div>
  );
}

function ProfileImg({ user, setUser }) {
  const [isUploaded, setIsUploaded] = useState(false);

  async function imgCompress(img) {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressdImg = await imageCompression(img, options);
      console.log("이미지 압축 완료");
      console.log(compressdImg);
      return compressdImg;
    } catch (error) {
      console.log("이미지 압축 실패");
      console.log(error);
      return img;
    }
  }

  async function onUpload(e) {
    const uploadedImg = e.target.files[0];
    const reader = new FileReader();

    console.log("업로드된 이미지");
    console.log(uploadedImg);

    console.log("이미지 압축 시작");
    const compressedImg = await imgCompress(uploadedImg);

    reader.readAsDataURL(compressedImg);
    reader.onloadend = () => {
      console.log("url로 변환");
      console.log(reader.result);
      setUser({ ...user, profileImage: reader.result });
      setIsUploaded(true);
    };
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
          src="/img/userProfileImgOverlay.png"
          alt="profile edit"
        />
        <img
          className="ProfileImg__img ProfileImg__form__img"
          src={
            user.profileImage
              ? user.profileImage
              : "/img/userProfileImgOverlay.png"
          }
          alt="User profile preview"
        />
      </label>
      <input
        className="ProfileImg__form__input"
        id="profile-img-input"
        type="file"
        accept="image/*"
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

function ProfileBtns({ setIsEditing, handleSubmit }) {
  return (
    <div className="ProfileBtns-container">
      <button
        type="submit"
        className="ProfileBtns__btn ProfileBtns__btn--featured font-caption1-bold"
        onClick={() => {
          setIsEditing();
          handleSubmit();
        }}
      >
        완료
      </button>
      <button
        type="button"
        className="ProfileBtns__btn font-caption1-regular"
        onClick={setIsEditing}
      >
        취소
      </button>
    </div>
  );
}

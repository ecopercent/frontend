import React from "react";
import "../style.css";

export default function ProfileBtns({ setIsEditing, handleSubmit }) {
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

import React from "react";
import "../style.css";

export default function ProfileText({ user, setUser }) {
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

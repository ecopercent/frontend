import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileText from "./ProfileText";
import ProfileBtns from "./ProfileBtns";

export default function ProfileViewer({ userId, setIsEditing }) {
  return (
    <div className="ProfileImg-ProfileText-container">
      <ProfileImg userId={userId} />
      <ProfileText userId={userId} />
      <ProfileBtns userId={userId} handleClick={setIsEditing} />
    </div>
  );
}

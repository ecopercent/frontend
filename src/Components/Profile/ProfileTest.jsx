import React, { useState } from "react";
import "./style.css";
import ProfileViewer from "./ProfileViewer";
import ProfileEditor from "./ProfileEditor";

export default function ProfileTest() {
  const [isEditing, setIsEditing] = useState(false);
  const userId = 1;

  return (
    <div className="Profile">
      {isEditing ? (
        <ProfileEditor
          userId={userId}
          setIsEditing={() => {
            return setIsEditing(!isEditing);
          }}
        />
      ) : (
        <ProfileViewer
          userId={userId}
          setIsEditing={() => {
            return setIsEditing(!isEditing);
          }}
        />
      )}
    </div>
  );
}

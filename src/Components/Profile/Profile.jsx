import React, { useState } from "react";
import "./style.css";
import { Navigate } from "react-router-dom";
import ProfileViewer from "./ProfileViewer";
import ProfileEditor from "./ProfileEditor";

export default function Profile({ userId }) {
  if (userId === (undefined || null)) return <Navigate to="/" />;

  const [isEditing, setIsEditing] = useState(false);

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

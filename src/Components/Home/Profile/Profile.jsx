import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ProfileViewer from "./ProfileViewer/ProfileViewer";
import ProfileEditor from "./ProfileEditor/ProfileEditor";

export default function Profile({ userId }) {
  if (userId === (undefined || null)) return <Navigate to="/" />;

  const [isEditing, setIsEditing] = useState(false);

  if (isEditing)
    return (
      <ProfileEditor
        userId={userId}
        setIsEditing={() => {
          return setIsEditing(!isEditing);
        }}
      />
    );

  return (
    <ProfileViewer
      userId={userId}
      setIsEditing={() => {
        return setIsEditing(!isEditing);
      }}
    />
  );
}

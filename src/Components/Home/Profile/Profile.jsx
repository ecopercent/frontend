import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ProfileViewer from "./ProfileViewer/ProfileViewer";
import ProfileEditor from "./ProfileEditor/ProfileEditor";
import { getLogin } from "../../../Layouts/Login/Login";

export default function Profile() {
  const userId = getLogin();
  if (!userId) return <Navigate to="/login" />;

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

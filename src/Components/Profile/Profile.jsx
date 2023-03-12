import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ProfileViewer from "./ProfileViewer/ProfileViewer";
import ProfileEditor from "./ProfileEditor/ProfileEditor";
import ProfileContainer from "./style";

export default function Profile({ userId }) {
  if (userId === (undefined || null)) return <Navigate to="/" />;

  const [isEditing, setIsEditing] = useState(false);

  return (
    <ProfileContainer>
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
    </ProfileContainer>
  );
}

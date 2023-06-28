import React, { useState } from "react";
import ProfileViewer from "./viewer/ProfileViewer";
import ProfileEditor from "./editor/ProfileEditor";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing)
    return (
      <ProfileEditor
        setIsEditing={() => {
          return setIsEditing(!isEditing);
        }}
      />
    );

  return (
    <ProfileViewer
      setIsEditing={() => {
        return setIsEditing(!isEditing);
      }}
    />
  );
}

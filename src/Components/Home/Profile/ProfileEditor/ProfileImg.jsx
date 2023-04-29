import React from "react";
import useImgInput from "../../../../hooks/useImgInput";

export default function ProfileImg({
  imgFile,
  setImgFile,
  preview,
  setPreview,
}) {
  const Form = useImgInput({
    imgFile,
    setImgFile,
    preview,
    setPreview,
    type: "user",
  });

  return <Form />;
}

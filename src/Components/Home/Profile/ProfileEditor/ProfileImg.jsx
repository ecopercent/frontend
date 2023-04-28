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
    h: 100,
    w: 100,
    radius: "50%",
  });

  return <Form />;
}

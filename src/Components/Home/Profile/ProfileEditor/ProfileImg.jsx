import React from "react";
import useImgInput from "../../../../hooks/useImgInput";

export default function ProfileImg({ imgFile, setImgFile }) {
  const Form = useImgInput({
    prevImg: imgFile,
    setUploadedFile: setImgFile,
    type: "user",
  });

  return <Form />;
}

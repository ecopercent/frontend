import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { useMutation } from "@tanstack/react-query";
import { PcPageWrap } from "../../Layouts/Main/style";
import CancelCheckModal from "../Modal/CancelCheckModal";
import SignUpUser from "./Form/SignUpUser";
import SignUpItems from "./Form/SignUpItems";
import { postUserOfKakao, postUserOfApple } from "../../Api/user";
import SignUpItemContext from "../../hooks/SignUpItemContext";
import * as S from "./style";

const initialUser = {
  nickname: "",
  profileMessage: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const access = navigate.state;
  if (!access) navigate("/");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userInput, setUserInput] = useState(initialUser);
  const [nicknameIsValid, setNicknameIsValid] = useState(true);
  const [warningText, setWarningText] = useState(null);
  const nicknameRef = useRef();

  // TODO: 페이지 이탈 확인 -> 아이템 context, 유저 쿠키 삭제
  useEffect(() => {
    if (cookie.load("signup")) {
      setUserInput(cookie.load("signup"));
      cookie.remove("signup");
    }
    if (cookie.load("validCheck")) {
      setNicknameIsValid(cookie.load("validCheck"));
      cookie.remove("validCheck");
    }
    if (cookie.load("warning")) {
      setWarningText(cookie.load("warning"));
      cookie.remove("warning");
    }
  }, []);

  const saveUserInput = () => {
    cookie.save("signup", userInput);
    if (nicknameIsValid) cookie.save("validCheck", nicknameIsValid);
    if (warningText) cookie.save("warning", warningText);
  };

  const signUpMutation = useMutation({
    mutationFn:
      cookie.load("oauth_provider") === "kakao"
        ? postUserOfKakao
        : postUserOfApple,
    onSuccess: () => {
      cookie.remove("oauth_provider", { path: "/" });
    },
  });

  // 아이템 받아오는 용
  const { state } = useContext(SignUpItemContext);

  const handleSubmit = () => {
    if (userInput.nickname.length === 0) {
      nicknameRef.current.focus();
      return setWarningText("닉네임을 입력하세요.");
    }
    // TODO: mutate 결과로 핸들링
    // if (!nicknameIsValid) {
    //   nicknameRef.current.focus();
    //   return setWarningText("이미 사용중인 닉네임입니다.");
    // }

    const formData = new FormData();

    formData.append(
      "userData",
      new Blob([
        JSON.stringify({
          ...userInput,
          oAuthProvider: cookie.load("oauth_provider"),
        }),
      ])
    );
    formData.append("profileImage", null);

    // TODO: 아이템 이미지 넣기
    if (state.tumbler) {
      formData.append("tumblerData", new Blob([JSON.stringify(state.tumbler)]));
      formData.append("tumblerImage", null);
    }
    if (state.ecobag) {
      formData.append("ecobagData", new Blob([JSON.stringify(state.ecobag)]));
      formData.append("ecobagImage", null);
    }

    signUpMutation.mutate(formData, access);
    return navigate("/welcome", { state: true });
  };

  const handleClick = () => {
    setModalIsOpen(true);
  };

  return (
    <PcPageWrap style={{ paddingBottom: "0" }}>
      {modalIsOpen && (
        <CancelCheckModal
          onClose={() => {
            setModalIsOpen(false);
          }}
          onConfirm={() => {
            setModalIsOpen(false);
            cookie.remove("signup");
            cookie.remove("oauth_provider");
            navigate("/");
          }}
        />
      )}
      <S.SignUpLayoutCol>
        <S.InputList>
          <SignUpUser
            userInput={userInput}
            setUserInput={setUserInput}
            nicknameIsValid={nicknameIsValid}
            setNicknameIsValid={setNicknameIsValid}
            warningText={warningText}
            setWarningText={setWarningText}
            ref={nicknameRef}
          />
          <SignUpItems category="tumbler" saveUserInput={saveUserInput} />
          <SignUpItems category="ecobag" saveUserInput={saveUserInput} />
        </S.InputList>
        <S.SubmitBtnsBox>
          <S.Btn onClick={handleClick}>취소</S.Btn>
          <S.Btn featured onClick={handleSubmit}>
            등록
          </S.Btn>
        </S.SubmitBtnsBox>
      </S.SignUpLayoutCol>
    </PcPageWrap>
  );
}

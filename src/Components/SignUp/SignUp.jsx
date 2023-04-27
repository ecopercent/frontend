import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { useMutation } from "@tanstack/react-query";
import { PcPageWrap } from "../../Layouts/Main/style";
import CancelCheckModal from "../Modal/CancelCheckModal";
import SignUpUser from "./Form/SignUpUser";
import SignUpItems from "./Form/SignUpItems";
import { postUserOfKakao, postUserOfApple } from "../../Api/user";
import * as S from "./style";
// import SignUpItemContext from "../../hooks/SignUpItemContext";

const initialUser = {
  nickname: "",
  // profileImage: "",
  profileMessage: "",
  email: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userInput, setUserInput] = useState(initialUser);
  const [nicknameIsValid, setNicknameIsValid] = useState(false);
  const [warningText, setWarningText] = useState(null);

  // TODO: 페이지 이탈 확인 -> 아이템 context, 유저 쿠키 삭제
  useEffect(() => {
    if (cookie.load("signup")) {
      setUserInput(cookie.load("signup"));
      cookie.remove("signup");
    }
    if (cookie.load("email"))
      setUserInput((oldInput) => {
        return { ...oldInput, email: cookie.load("email") };
      });
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
      cookie.remove("email", { path: "/" });
      cookie.remove("oauth_provider", { path: "/" });
    },
  });

  // 아이템 받아오는 용
  // const { state } = useContext(SignUpItemContext);

  const handleSubmit = () => {
    let signUpForm = {
      ...userInput,
      oAuthProvider: cookie.load("oauth_provider"),
    };
    if (signUpForm.nickname.length === 0)
      return setWarningText("닉네임을 입력하세요.");
    if (!nicknameIsValid)
      return setWarningText("닉네임 중복확인을 완료해주세요.");

    signUpForm = {
      ...signUpForm,
      oAuthProvider: cookie.load("oauth_provider"),
    };

    // TODO: api 업데이트 되면 아이템 폼에 넣기
    // if (state.tumbler)
    // if (state.ecobag)

    signUpMutation.mutate(signUpForm);
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
            cookie.remove("email");
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

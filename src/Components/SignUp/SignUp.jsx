import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { PcPageWrap } from "../../Layouts/Main/style";
import CancelCheckModal from "../Modal/CancelCheckModal";
import SignUpUser from "./SignUpUser";
import SignUpItems from "./SignUpItems";
import * as S from "./style";
// import SignUpItemContext from "../../hooks/SignUpItemContext";

const initialUser = {
  nickname: "",
  // profileImage: "",
  profileMessage: "",
  // email: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userInput, setUserInput] = useState(initialUser);
  const [nicknameIsValid, setNicknameIsValid] = useState(false);
  const [warningText, setWarningText] = useState(null);

  useEffect(() => {
    if (cookie.load("signup")) setUserInput(cookie.load("signup"));
  }, []);

  const saveUserInput = () => {
    cookie.save("signup", userInput, { path: "/signup", maxAge: 60 * 30 });
  };

  // 아이템 받아오는 용
  // const { state } = useContext(SignUpItemContext);

  const handleSubmit = () => {
    const signUpForm = { ...userInput };
    if (signUpForm.nickname.length === 0)
      return setWarningText("닉네임을 입력하세요.");
    if (!nicknameIsValid)
      return setWarningText("닉네임 중복확인을 완료해주세요.");

    // TODO: api 업데이트 되면 아이템 폼에 넣기
    // if (state.tumbler)
    // if (state.ecobag)
    console.log(signUpForm);
    cookie.remove("signup");
    // TODO: 가입 완료 페이지 구현 + 리다이렉트
    return alert("가입 가능!");
  };

  // TODO: 페이지 이탈 확인 -> 아이템 context, 유저 쿠키 삭제

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
            navigate(-1);
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

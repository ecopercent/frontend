import React, { useEffect, useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { useMutation } from "@tanstack/react-query";
import { PcPageWrap } from "@layout/Main/style";
import CancelCheckModal from "@modal/CancelCheckModal";
import SignUpUser from "./Form/SignUpUser";
import SignUpItems from "./Form/SignUpItems";
import SignUpItemContext from "@hooks/SignUpItemContext";
import { postUserOfKakao, postUserOfApple } from "@api/user";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import * as S from "./style";

const initialUser = {
  nickname: "",
  profileMessage: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const access = useLocation().state;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userInput, setUserInput] = useState(initialUser);
  const [warningText, setWarningText] = useState(null);
  const nicknameRef = useRef();
  const [imgFile, setImgFile] = useState(null);

  function removeCookies() {
    cookie.remove("signup");
    cookie.remove("warning");
    URL.revokeObjectURL(cookie.load("previewUrl"));
    cookie.remove("previewUrl");
    localStorage.removeItem("signupImg");
    cookie.remove("oauth_provider", { path: "/" });
  }

  // TODO: 페이지 이탈 확인 -> 아이템 context, 유저 쿠키 삭제
  useEffect(() => {
    // if (!access) navigate("/");

    if (cookie.load("signup")) {
      setUserInput(cookie.load("signup"));
      cookie.remove("signup");
    }
    if (localStorage.getItem("signupImg")) {
      // blob 객체로 재변환
      fetch(localStorage.getItem("signupImg"))
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          return setImgFile(blob);
        });
      localStorage.removeItem("signupImg");
    }
    if (cookie.load("warning")) {
      setWarningText(cookie.load("warning"));
      cookie.remove("warning");
    }
    nicknameRef.current.focus();
  }, []);

  const saveUserInput = async () => {
    cookie.save("signup", userInput);
    if (imgFile) {
      // blob 객체는 저장소에 넣을 수 없으므로 페이지 이동 시 dataURL로 변환하여 저장해둠
      const reader = new FileReader();
      reader.readAsDataURL(imgFile);
      reader.onloadend = () => {
        localStorage.setItem("signupImg", reader.result);
      };
      cookie.save("previewUrl", URL.createObjectURL(imgFile));
    }
    if (warningText) cookie.save("warning", warningText);
  };

  const { signIn } = useContext(AuthenticatedContext);
  const signUpMutation = useMutation({
    mutationFn:
      cookie.load("oauth_provider") === "kakao"
        ? postUserOfKakao
        : postUserOfApple,
    onSuccess: () => {
      removeCookies();
      return signIn();
    },
    onError: (code) => {
      if (code === 403) {
        // TODO: 모달로?
        alert("세션이 만료되었습니다.");
        removeCookies();
        return navigate("/");
      }
      if (code === 409) {
        nicknameRef.current.focus();
        return setWarningText("이미 사용중인 닉네임입니다.");
      }
      return code;
    },
  });

  const { state } = useContext(SignUpItemContext);
  const handleSubmit = () => {
    if (userInput.nickname.length === 0) {
      nicknameRef.current.focus();
      return setWarningText("닉네임을 입력하세요.");
    }

    const formData = new FormData();
    formData.append(
      "userData",
      new Blob(
        [
          JSON.stringify({
            ...userInput,
            oAuthProvider: cookie.load("oauth_provider"),
          }),
        ],
        { type: "application/json" }
      )
    );
    formData.append("profileImage", imgFile);
    if (state.tumbler) {
      formData.append(
        "tumblerData",
        new Blob([JSON.stringify(state.tumbler)], { type: "application/json" })
      );
      formData.append("tumblerImage", state.tumblerImg);
    }
    if (state.ecobag) {
      formData.append(
        "ecobagData",
        new Blob([JSON.stringify(state.ecobag)], { type: "application/json" })
      );
      formData.append("ecobagImage", state.ecobagImg);
    }

    return signUpMutation.mutate({ formData, access: access.access });
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
            removeCookies();
            navigate("/");
          }}
        />
      )}
      <S.SignUpLayoutCol>
        <S.InputList>
          <SignUpUser
            userInput={userInput}
            setUserInput={setUserInput}
            warningText={warningText}
            setWarningText={setWarningText}
            setImgFile={setImgFile}
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

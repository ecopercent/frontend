import React, { useEffect, useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { useMutation } from "@tanstack/react-query";
import { PcPageWrap } from "@layout/Main/style";
import CancelCheckModal from "@modal/CancelCheckModal";
import SignUpUser from "./Form/SignUpUser";
import SignUpItems from "./Form/SignUpItems";
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

  const [cancelCheckModalIsOpen, setCancelCheckModalIsOpen] = useState(false);
  const [userInput, setUserInput] = useState(initialUser);
  const [warningText, setWarningText] = useState(null);
  const nicknameRef = useRef();
  const [imgFile, setImgFile] = useState(null);

  // TEST: 아이템 수정중
  const [itemsInput, setItemsInput] = useState({});

  function removeCookies() {
    // TODO: oauth_provider state로 받기
    cookie.remove("oauth_provider", { path: "/" });
  }

  useEffect(() => {
    // TEST: 서버 없이 url 다이렉트 진입 개발중
    // if (!access) navigate("/");

    nicknameRef.current.focus();
  }, []);

  console.log("회원가입 메인", itemsInput);

  const { signIn } = useContext(AuthenticatedContext);
  const signUpMutation = useMutation({
    mutationFn:
      // TODO: oauth_provider state로 받기
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
    if (itemsInput.tumbler) {
      formData.append(
        "tumblerData",
        new Blob([JSON.stringify(itemsInput.tumbler)], {
          type: "application/json",
        })
      );
      formData.append("tumblerImage", itemsInput.tumblerImg);
    }
    if (itemsInput.ecobag) {
      formData.append(
        "ecobagData",
        new Blob([JSON.stringify(itemsInput.ecobag)], {
          type: "application/json",
        })
      );
      formData.append("ecobagImage", itemsInput.ecobagImg);
    }

    return signUpMutation.mutate({ formData, access: access.access });
  };

  const handleClick = () => {
    setCancelCheckModalIsOpen(true);
  };

  return (
    <PcPageWrap style={{ paddingBottom: "0" }}>
      {cancelCheckModalIsOpen && (
        <CancelCheckModal
          onClose={() => {
            setCancelCheckModalIsOpen(false);
          }}
          onConfirm={() => {
            setCancelCheckModalIsOpen(false);
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
          <SignUpItems
            category="tumbler"
            itemsInput={itemsInput}
            setItemsInput={setItemsInput}
          />
          <SignUpItems
            category="ecobag"
            itemsInput={itemsInput}
            setItemsInput={setItemsInput}
          />
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

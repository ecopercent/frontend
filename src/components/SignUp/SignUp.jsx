import React, { useEffect, useState, useRef, useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { PcPageWrap } from "src/layout/Main/style";
import CancelCheckModal from "src/components/Modal/CancelCheckModal";
import SignUpUser from "./Form/SignUpUser";
import SignUpItems from "./Form/SignUpItems";
import { postUserOfKakao, postUserOfApple } from "src/api/user";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import * as S from "./style";

const initialUser = {
  nickname: "",
  profileMessage: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const state = useLocation()?.state;
  if (!state) return <Navigate to="/" />;

  const [cancelCheckModalIsOpen, setCancelCheckModalIsOpen] = useState(false);
  const [warningText, setWarningText] = useState(null);
  const nicknameRef = useRef();

  const [userInput, setUserInput] = useState(initialUser);
  const [userImg, setUserImg] = useState(null);
  const [itemsInput, setItemsInput] = useState({});

  useEffect(() => {
    nicknameRef.current.focus();
  }, []);

  const { signIn } = useContext(AuthenticatedContext);
  const signUpMutation = useMutation({
    mutationFn:
      state.oAuthProvider === "kakao" ? postUserOfKakao : postUserOfApple,
    onSuccess: () => {
      return signIn();
    },
    onError: (code) => {
      if (code === 403) {
        // TODO: 모달로?
        alert("세션이 만료되었습니다.");
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
            oAuthProvider: state.oAuthProvider || "apple",
          }),
        ],
        { type: "application/json" }
      )
    );
    formData.append("profileImage", userImg);
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

    return signUpMutation.mutate({ formData, access: state.access });
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
            setUserImg={setUserImg}
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

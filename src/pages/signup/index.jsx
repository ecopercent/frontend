import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useCallback,
} from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Spinner from "@components/Spinner";
import SignUpUser from "./components/SignUpUser";
import SignUpItems from "./components/SignUpItems";
import CancelCheckModal from "@modal/CancelCheckModal";

import CheckTermOfUseModal from "@components/modal/CheckTermOfUseModal";
import { postUserOfKakao, postUserOfApple } from "src/api/user";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";

import { OutletWrapper } from "@layout/style";
import * as S from "./style";

export default function SignUp() {
  const navigate = useNavigate();
  const state = useLocation()?.state;
  if (!state) return <Navigate to="/" />;

  const [cancelCheckModalIsOpen, setCancelCheckModalIsOpen] = useState(false);
  const [warningText, setWarningText] = useState(null);
  const nicknameRef = useRef();

  const [showCheckTermOfUseModal, setShowCheckTermOfUseModal] = useState(false);
  const onCloseCheckTermOfUseModal = useCallback(() => {
    setShowCheckTermOfUseModal(false);
  }, []);

  const [userInput, setUserInput] = useState({
    nickname: "",
    profileMessage: "",
  });
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
      if (code === 400) {
        alert("이미 가입된 계정입니다.");
        return navigate("/");
      }
      if (code === 403) {
        alert("회원가입 유효 시간이 만료되었습니다.");
        return navigate("/");
      }
      if (code === 409) {
        nicknameRef.current.focus();
        return setWarningText("이미 사용중인 닉네임입니다.");
      }
      return code;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.nickname.trim().length < 2) {
      nicknameRef.current.focus();
      return setWarningText("닉네임을 2자 이상 입력하세요.");
    }
    return setShowCheckTermOfUseModal(true);
  };

  const handleMutate = () => {
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

  return signUpMutation.isLoading || signUpMutation.isPaused ? (
    <Spinner size="50px" />
  ) : (
    <OutletWrapper fixedWidth fullHeight>
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

      <S.SignUpContainer>
        <S.SignUpLayoutCol>
          <S.SignUpForm onSubmit={handleSubmit}>
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
            <S.SubmitBtnsBox>
              <S.Btn type="reset" onClick={handleClick}>
                취소
              </S.Btn>
              <S.Btn featured>등록</S.Btn>
            </S.SubmitBtnsBox>
          </S.SignUpForm>
        </S.SignUpLayoutCol>
        {showCheckTermOfUseModal && (
          <CheckTermOfUseModal
            onClose={onCloseCheckTermOfUseModal}
            onSubmit={handleMutate}
          />
        )}
      </S.SignUpContainer>
    </OutletWrapper>
  );
}

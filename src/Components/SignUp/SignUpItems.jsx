import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CancelCheckModal from "../Modal/CancelCheckModal";
import SignUpItemContext from "../../hooks/SignUpItemContext";
import SignUpItemPreview from "./SignUpItemPreview";
import * as S from "./style";

export default function SignUpItems({ category, saveUserInput }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(SignUpItemContext);
  const navigateState = {
    type: "unauth",
    category,
  };

  const handleAdd = () => {
    saveUserInput();
    navigate("/item/add", { state: navigateState });
  };

  const handleEdit = () => {
    saveUserInput();
    navigate("/item/edit", { state: navigateState });
  };

  const handleCancel = () => {
    setModalIsOpen(true);
  };

  return (
    <S.InputItem col>
      {modalIsOpen && (
        <CancelCheckModal
          onConfirm={() => {
            dispatch({
              type: `${category}Delete`,
            });
            setModalIsOpen(false);
          }}
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
      <S.LabelBox>
        <S.Label>{category === "tumbler" ? "텀블러" : "에코백"}</S.Label>
        {state[category] ? (
          <>
            <S.Btn warning onClick={handleCancel}>
              등록취소
            </S.Btn>
            <S.Btn onClick={handleEdit}>수정</S.Btn>
          </>
        ) : (
          <S.Btn onClick={handleAdd}>등록</S.Btn>
        )}
      </S.LabelBox>
      {state[category] ? (
        <SignUpItemPreview initialItem={state[category]} />
      ) : (
        <S.NoticeText>아이템은 나중에 등록할 수 있습니다.</S.NoticeText>
      )}
    </S.InputItem>
  );
}

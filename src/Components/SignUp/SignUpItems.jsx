import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CancelCheckModal from "../Modal/CancelCheckModal";
import SignUpItemContext from "../../hooks/SignUpItemContext";
import * as S from "./style";

export default function SignUpItems({ category }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(SignUpItemContext);
  const navigateState = {
    type: "unauth",
    category,
  };

  const onAdd = () => {
    navigate("/item/add", { state: navigateState });
  };

  const onEdit = () => {
    navigate("/item/edit", { state: navigateState });
  };

  const onCancel = () => {
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
            <S.Btn warning onClick={onCancel}>
              등록취소
            </S.Btn>
            <S.Btn onClick={onEdit}>수정</S.Btn>
          </>
        ) : (
          <S.Btn onClick={onAdd}>등록</S.Btn>
        )}
      </S.LabelBox>
      {state[category] ? (
        <>
          <div>이미지</div>
          <span>닉네임: {state[category].nickname}</span>
          <span>브랜드: {state[category].brand}</span>
          {state[category].type && <span>타입: {state[category].type}</span>}
          {state[category].price !== 0 && (
            <span>가격: {state[category].price}</span>
          )}
          {state[category].purchaseDate && (
            <span>구매일: {state[category].purchaseDate}</span>
          )}
        </>
      ) : (
        <S.NoticeText>아이템은 나중에 등록할 수 있습니다.</S.NoticeText>
      )}
    </S.InputItem>
  );
}

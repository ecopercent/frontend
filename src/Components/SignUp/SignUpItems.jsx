import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CancelCheckModal from "../Modal/CancelCheckModal";
import SignUpItemContext from "../../hooks/SignUpItemContext";
import * as S from "./style";

export default function SignUpItems({ category }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(SignUpItemContext);

  const onAdd = () => {
    const addObj = {
      type: "unauth",
      category,
    };
    navigate("/item/add", { state: addObj });
  };

  const onEdit = () => {
    // TODO: 아이템 수정 페이지에서 [등록] 누르면 데이터 세팅
    alert("아이템 수정 페이지로 이동!");
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
        // TODO: 등록된 아이템 정보 표시
        <p>{category} 정보</p>
      ) : (
        <S.NoticeText>아이템은 나중에 등록할 수 있습니다.</S.NoticeText>
      )}
    </S.InputItem>
  );
}

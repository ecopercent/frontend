import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CancelCheckModal from "@modal/CancelCheckModal";
// import SignUpItemContext from "@hooks/SignUpItemContext";
import SignUpItemPreview from "./SignUpItemPreview";
import useModal from "@hooks/useModal";
import { ItemAdd } from "@pages/ItemModification/ItemAdd/ItemAdd";
import * as S from "./style";

export default function SignUpItems({
  category,
  // saveUserInput,
  itemsInfo,
  setItemsInfo,
}) {
  const [itemDeleteModalIsOpen, setItemDeleteModalIsOpen] = useState(false);
  const navigate = useNavigate();
  // const { state, dispatch } = useContext(SignUpItemContext);
  const navigateState = {
    type: "unauth",
    category,
  };
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const onAddModalClose = () => {
    setAddModalIsOpen(false);
  };
  const TumblerModal = useModal({ onAddModalClose });

  const handleAdd = () => {
    setAddModalIsOpen(true);
    // saveUserInput();
    // navigate("/item/add", { state: navigateState });
  };

  const handleEdit = () => {
    // saveUserInput();
    navigate("/item/edit", { state: navigateState });
  };

  const handleCancel = () => {
    setItemDeleteModalIsOpen(true);
  };

  const onItemAdd = (input) => {
    const newInfo = { ...itemsInfo };
    newInfo[category] = input;
    setItemsInfo(newInfo);
    onAddModalClose();
  };

  return (
    <S.InputItem col>
      {addModalIsOpen && (
        <TumblerModal>
          <div style={{ height: "100vh", backgroundColor: "white" }}>
            <ItemAdd
              category={category}
              onCancel={onAddModalClose}
              onSubmit={onItemAdd}
            />
          </div>
        </TumblerModal>
      )}
      {itemDeleteModalIsOpen && (
        <CancelCheckModal
          onConfirm={() => {
            setItemsInfo(
              itemsInfo.filter((savedCategory) => {
                return savedCategory !== category;
              })
            );
            // dispatch({
            //   type: `${category}Delete`,
            // });
            setItemDeleteModalIsOpen(false);
          }}
          onClose={() => {
            setItemDeleteModalIsOpen(false);
          }}
        />
      )}
      <S.LabelBox>
        <S.Label>{category === "tumbler" ? "텀블러" : "에코백"}</S.Label>
        {itemsInfo[category] ? (
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
      {itemsInfo[category] ? (
        <SignUpItemPreview
          initialItem={itemsInfo[category]}
          initialImg={itemsInfo[`${category}Img`]}
        />
      ) : (
        <S.NoticeText>아이템은 나중에 등록할 수 있습니다.</S.NoticeText>
      )}
    </S.InputItem>
  );
}

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
  itemsInput,
  setItemsInput,
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
    setItemsInput((prev) => {
      const newInfo = { ...prev };
      newInfo[category] = input;
      return newInfo;
    });
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
            setItemsInput((prev) => {
              const newInput = { ...prev };
              delete newInput[`${category}`];
              return newInput;
            });
            setItemDeleteModalIsOpen(false);
          }}
          onClose={() => {
            setItemDeleteModalIsOpen(false);
          }}
        />
      )}
      <S.LabelBox>
        <S.Label>{category === "tumbler" ? "텀블러" : "에코백"}</S.Label>
        {itemsInput[category] ? (
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
      {itemsInput[category] ? (
        <SignUpItemPreview
          initialItem={itemsInput[category]}
          initialImg={itemsInput[`${category}Img`]}
        />
      ) : (
        <S.NoticeText>아이템은 나중에 등록할 수 있습니다.</S.NoticeText>
      )}
    </S.InputItem>
  );
}

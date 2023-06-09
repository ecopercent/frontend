import React, { useRef, useState } from "react";
import CancelCheckModal from "@modal/CancelCheckModal";
import SignUpItemPreview from "./SignUpItemPreview";
import useModal from "@hooks/useModal";
import { ItemAdd } from "@pages/ItemModification/ItemAdd/ItemAdd";
import { ItemEdit } from "@pages/ItemModification/ItemEdit/ItemEdit";
import * as S from "./style";

export default function SignUpItems({ category, itemsInput, setItemsInput }) {
  const [itemModalIsOpen, setItemModalIsOpen] = useState("");
  const [itemDeleteModalIsOpen, setItemDeleteModalIsOpen] = useState(false);

  const onItemModalClose = () => {
    setItemModalIsOpen("");
  };
  const ItemModal = useModal({ onItemModalClose });

  const handleAdd = () => {
    setItemModalIsOpen("add");
  };

  const handleEdit = () => {
    setItemModalIsOpen("edit");
  };

  const handleCancel = () => {
    setItemDeleteModalIsOpen(true);
  };

  const imgFile = useRef();
  const setImgFile = (img) => {
    imgFile.current = img;
  };

  console.log("아이템 추가 메인", itemsInput, "\nitems img", imgFile.current);

  const onItemAdd = (input) => {
    setItemsInput((prev) => {
      const newInfo = { ...prev };
      newInfo[category] = input;
      newInfo[`${category}Img`] = imgFile.current;
      return newInfo;
    });
    onItemModalClose();
  };

  return (
    <S.InputItem col>
      {itemModalIsOpen === "" ||
        (itemModalIsOpen === "add" ? (
          <ItemModal>
            <div style={{ height: "100vh", backgroundColor: "white" }}>
              <ItemAdd
                category={category}
                onCancel={onItemModalClose}
                onSubmit={onItemAdd}
                onUploadImg={setImgFile}
              />
            </div>
          </ItemModal>
        ) : (
          <ItemModal>
            <div style={{ height: "100vh", backgroundColor: "white" }}>
              <ItemEdit
                category={category}
                item={itemsInput[category]}
                onCancel={onItemModalClose}
                onSubmit={onItemAdd}
                onUploadImg={setImgFile}
              />
            </div>
          </ItemModal>
        ))}
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

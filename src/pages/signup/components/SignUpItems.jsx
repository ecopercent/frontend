import React, { useMemo, useRef, useState } from "react";
import CancelCheckModal from "@components/modal/CancelCheckModal";
import SignUpItemPreview from "./SignUpItemPreview";
import useModal from "@hooks/useModal";
import { ItemAdd } from "@pages/item/components/modification/ItemAdd/ItemAdd";
import { ItemEdit } from "@pages/item/components/modification/ItemEdit/ItemEdit";
import * as S from "./style";

export default function SignUpItems({ category, itemsInput, setItemsInput }) {
  const [openedModal, setOpenedModal] = useState("");
  const [itemDeleteModalIsOpen, setItemDeleteModalIsOpen] = useState(false);

  const onItemModalClose = useMemo(() => {
    return () => {
      setOpenedModal("");
    };
  }, []);

  const handleAdd = () => {
    setOpenedModal("add");
  };

  const handleEdit = () => {
    setOpenedModal("edit");
  };

  const handleCancel = () => {
    setItemDeleteModalIsOpen(true);
  };

  const ItemModal = useModal({ onItemModalClose });

  const imgFile = useRef(null);
  const setImgFile = useMemo(() => {
    return (img) => {
      imgFile.current = img;
    };
  }, []);

  const onItemAdd = useMemo(() => {
    return (input) => {
      setItemsInput((prev) => {
        const newInfo = { ...prev };
        newInfo[category] = { ...input, category };
        newInfo[`${category}Img`] = imgFile.current;
        return newInfo;
      });
      onItemModalClose();
    };
  }, []);

  const onItemDelete = () => {
    setItemsInput((prev) => {
      const newInput = { ...prev };
      delete newInput[`${category}`];
      imgFile.current = null;
      return newInput;
    });
    setItemDeleteModalIsOpen(false);
  };

  return (
    <S.InputItem col>
      {openedModal === "" ||
        (openedModal === "add" ? (
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
                itemImg={itemsInput[`${category}Img`]}
                onCancel={onItemModalClose}
                onSubmit={onItemAdd}
                onUploadImg={setImgFile}
              />
            </div>
          </ItemModal>
        ))}
      {itemDeleteModalIsOpen && (
        <CancelCheckModal
          onConfirm={onItemDelete}
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

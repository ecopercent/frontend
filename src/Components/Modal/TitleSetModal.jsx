import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { patchTitleItem } from "@api/item";
import useOutsideClick from "@hooks/useOutsideClick";
import SmallModal from "./SmallModal";
import * as S from "./style";

export default function TitleSetModal({ queryData, onClose }) {
  const modalRef = useRef();
  useOutsideClick(modalRef, onClose);

  const queryClient = useQueryClient();
  const titleMutation = useMutation({
    mutationFn: () => {
      return patchTitleItem(queryData);
    },
    onSuccess: (res) => {
      queryClient.setQueryData(["title", `${queryData.category}`], res);
      onClose();
      queryClient.refetchQueries(["title", `${queryData.category}`]);
      queryClient.refetchQueries([`${queryData.category}`, "list"]);
    },
  });

  return (
    <SmallModal onClose={onClose}>
      <S.TextContainer>
        <S.ModalTitle>대표아이템 설정</S.ModalTitle>
        <S.ModalContent>대표 아이템을 변경하시겠습니까?</S.ModalContent>
      </S.TextContainer>
      <S.BtnContainer>
        <S.Btn type="button" onClick={onClose}>
          취소
        </S.Btn>
        <S.Btn
          featured
          type="button"
          onClick={() => {
            titleMutation.mutate();
          }}
        >
          확인
        </S.Btn>
      </S.BtnContainer>
    </SmallModal>
  );
}

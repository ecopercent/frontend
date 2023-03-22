import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { patchTitleItem } from "../../Api/user";
import useOutsideClick from "../../hooks/useOutsideClick";
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
    onSuccess: (data) => {
      queryClient.setQueryData(["user", queryData.userId], data);
      queryClient.invalidateQueries(["user", queryData.userId]);
    },
  });

  return (
    <SmallModal onClose={onClose}>
      <S.TextContainer>
        <S.ModalTitle>대표아이템 설정</S.ModalTitle>
        <S.ModalContent>대표 아이템을 변경하시겠습니까?</S.ModalContent>
      </S.TextContainer>
      <S.BtnContainer>
        <S.CancelBtn
          type="button"
          onClick={() => {
            return onClose();
          }}
        >
          취소
        </S.CancelBtn>
        <S.SubmitBtn
          type="button"
          onClick={() => {
            titleMutation.mutate();
            onClose();
          }}
        >
          확인
        </S.SubmitBtn>
      </S.BtnContainer>
    </SmallModal>
  );
}

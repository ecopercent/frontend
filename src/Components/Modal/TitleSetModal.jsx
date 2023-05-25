import React, { useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { patchTitleItem, getTitleItem } from "@api/item";
import useOutsideClick from "@hooks/useOutsideClick";
import SmallModal from "./SmallModal";
import * as S from "./style";

export default function TitleSetModal({ queryData, onClose }) {
  const modalRef = useRef();
  useOutsideClick(modalRef, onClose);

  const prevTitleId = useQuery({
    queryKey: ["title", queryData.category],
    queryFn: () => {
      getTitleItem(queryData.category);
    },
  }).data?.id;

  const queryClient = useQueryClient();
  const titleMutation = useMutation({
    mutationFn: () => {
      return patchTitleItem(queryData);
    },
    onSuccess: async (res) => {
      queryClient.setQueryData(["item", res.id], res);
      queryClient.setQueryData(["title", res.category], res);
      queryClient.invalidateQueries(["title", res.category]);
      await queryClient.refetchQueries(["item", prevTitleId]);
      onClose();
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

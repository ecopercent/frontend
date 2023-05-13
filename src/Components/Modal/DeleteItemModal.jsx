import React, { useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "@api/item";
import SmallModal from "./SmallModal";
import * as S from "./style";

const DeleteItemModal = ({ onClose, item }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const itemDeleteMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: async () => {
      await queryClient.refetchQueries([`${item.category}`, "list"]);
      queryClient.removeQueries(["item", Number(item.id)]);
      queryClient.refetchQueries(["title", item.category]);
      onClose();
      navigate("/item", { state: { category: item.category } });
    },
  });
  const onDeleteItem = useCallback((e) => {
    e.preventDefault();
    itemDeleteMutation.mutate(item.id);
  }, []);

  return (
    <SmallModal onClose={onClose}>
      <S.TextContainer>
        <S.ModalTitle>아이템 삭제</S.ModalTitle>
        <S.ModalContent>
          아이템을 삭제하면 복구할 수 없습니다.
          <br />
          정말 삭제하시겠습니까?
        </S.ModalContent>
      </S.TextContainer>
      <S.BtnContainer>
        <S.Btn type="reset" onClick={onClose}>
          취소
        </S.Btn>
        <S.Btn warning onClick={onDeleteItem}>
          삭제
        </S.Btn>
      </S.BtnContainer>
    </SmallModal>
  );
};

export default DeleteItemModal;

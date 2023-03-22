import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { patchTitleItem } from "../../Api/user";
import useOutsideClick from "../../hooks/useOutsideClick";
import ModalContainer from "./ModalContainer";
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
    <ModalContainer>
      <div>
        <div ref={modalRef} style={{ backgroundColor: "yellow" }}>
          <h1>대표아이템 설정</h1>
          <span>대표 아이템을 변경하시겠습니까?</span>
          <div>
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
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

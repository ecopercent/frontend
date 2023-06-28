import React from "react";
import SmallModal from "./SmallModal";
import * as S from "./style";

const DeleteUserModal = ({ onClose, onCheckDelete }) => {
  return (
    <SmallModal onClose={onClose}>
      <S.TextContainer>
        <S.ModalTitle>회원탈퇴</S.ModalTitle>
        <S.ModalContent>
          탈퇴한 계정은 복구할 수 없습니다.
          <br />
          정말 탈퇴하시겠습니까?
        </S.ModalContent>
      </S.TextContainer>
      <S.BtnContainer>
        <S.Btn type="reset" onClick={onClose}>
          취소
        </S.Btn>
        <S.Btn warning onClick={onCheckDelete}>
          탈퇴
        </S.Btn>
      </S.BtnContainer>
    </SmallModal>
  );
};

export default DeleteUserModal;

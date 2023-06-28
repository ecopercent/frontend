import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { deleteUser } from "@api/user";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";

const AccountDelete = () => {
  const navigate = useNavigate();
  const { authenticated, signOut } = useContext(AuthenticatedContext);

  return (
    <S.SettingWrap>
      <S.HoverSettingTitle
        onClick={() => {
          navigate(-1);
        }}
      >
        <span style={{ marginRight: "1%" }}>{"<"}</span> 회원 탈퇴
      </S.HoverSettingTitle>
      <form>
        <S.Category>우리와 함께한 추억</S.Category>
        <S.Plain>auth 끝나고 채울 예정</S.Plain>
        <S.Category>우리가 함께한 텀블러</S.Category>
        <S.Plain>auth 끝나고 채울 예정 </S.Plain>
        <S.Category>우리가 함께한 에코백</S.Category>
        <S.Plain>auth 끝나고 채울 예정 </S.Plain>
        <S.Category>정말 지구를 죽이면서까지 탈퇴하시겠습니까?</S.Category>
        <S.Plain>auth 끝나고 채울 예정 </S.Plain>
        {/* TEST: 회원가입 테스트용 탈퇴 버튼 */}
        <button
          type="button"
          onClick={() => {
            deleteUser();
            if (authenticated) signOut();
          }}
        >
          탈퇴
        </button>
      </form>
    </S.SettingWrap>
  );
};

export default AccountDelete;

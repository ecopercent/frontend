import React, { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style";
import DeleteUserModal from "@components/modal/DeleteUserModal";
import { deleteUser } from "src/api/user";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import { useQuery } from "@tanstack/react-query";
import { getItemList } from "@api/item";

const countUsageCount = (itemList) => {
  let sum = 0;
  itemList.forEach((eachItem) => {
    console.log("Tet", eachItem, eachItem.currentUsageCount);
    sum += eachItem.currentUsageCount;
  });
  return sum;
};

const AccountDelete = () => {
  const navigate = useNavigate();
  const { authenticated, signOut } = useContext(AuthenticatedContext);
  const tumblerListQuery = useQuery({
    queryKey: ["tumbler", "list"],
    queryFn: () => {
      return getItemList("tumbler");
    },
  });
  const ecobagListQuery = useQuery({
    queryKey: ["ecobag", "list"],
    queryFn: () => {
      return getItemList("ecobag");
    },
  });
  const [tumblerUsageCount, setTumblerUsageCount] = useState(0);
  const [ecobagUsageCount, setEcobagUsageCount] = useState(0);
  const [tumblerCount, setTumblerCount] = useState(0);
  const [ecobagCount, setEcobagCount] = useState(0);
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowDeleteUserModal(false);
  }, []);

  useEffect(() => {
    if (tumblerListQuery?.isSuccess && ecobagListQuery?.isSuccess) {
      setTumblerCount(tumblerListQuery?.data.length);
      setEcobagCount(ecobagListQuery?.data.length);
      setTumblerUsageCount(countUsageCount(tumblerListQuery?.data));
      setEcobagUsageCount(countUsageCount(ecobagListQuery?.data));
    }
  }, [tumblerListQuery, ecobagListQuery]);

  const onDeleteUser = async () => {
    await deleteUser();
    if (authenticated) signOut();
  };

  return (
    <S.SettingWrap>
      <S.HoverSettingTitle
        onClick={() => {
          navigate(-1);
        }}
      >
        <span>{"<"}</span> 회원 탈퇴
      </S.HoverSettingTitle>
      <form>
        <S.Category>에코퍼센트와 함께</S.Category>
        <S.Plain>
          {/* TODO: 최초 회원가입 ~ 현재까지 시간 안내하주고싶은데
          가입일정보가 없어서 마찬가지로 현재는 불가능 
          */}
          <S.ColorPlain>10</S.ColorPlain> 일 동안
        </S.Plain>
        <S.Category>텀블러</S.Category>
        <S.Plain>
          <S.ColorPlain>{tumblerCount}</S.ColorPlain> 개와
        </S.Plain>
        <S.Category>에코백</S.Category>
        <S.Plain>
          <S.ColorPlain>{ecobagCount}</S.ColorPlain> 개로
        </S.Plain>
        <S.Category>지구를 지켰던</S.Category>
        <S.Plain>
          <S.ColorPlain>{tumblerUsageCount + ecobagUsageCount}</S.ColorPlain>{" "}
          번의 순간들
        </S.Plain>
        <S.Category>정말 지구를 죽이면서까지 탈퇴하시겠습니까?</S.Category>
        <S.HighlightPinkHover
          onClick={() => {
            setShowDeleteUserModal(true);
          }}
        >
          그럼요
        </S.HighlightPinkHover>
      </form>
      {showDeleteUserModal && (
        <DeleteUserModal onClose={onCloseModal} onCheckDelete={onDeleteUser} />
      )}
    </S.SettingWrap>
  );
};

export default AccountDelete;

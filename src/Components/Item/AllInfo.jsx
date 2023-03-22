import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getItemList } from "../../Api/item";
import * as S from "./style";

export default function AllInfo({ userId }) {
  // db에 생기기 전까지 임시 목표 사용횟수
  const goalCnt = 300;

  const tumblersQuery = useQuery({
    queryKey: ["tumblers", userId],
    queryFn: () => {
      return getItemList(userId, "tumbler");
    },
  });

  const ecobagsQuery = useQuery({
    queryKey: ["ecobags", userId],
    queryFn: () => {
      return getItemList(userId, "ecobag");
    },
  });

  const achivedCnt = { tumbler: 0, ecobag: 0 };
  if (tumblersQuery.isSuccess) {
    achivedCnt.tumbler = tumblersQuery.data.filter((tumbler) => {
      return tumbler.usageCount >= goalCnt;
    }).length;
  }
  if (ecobagsQuery.isSuccess) {
    achivedCnt.ecobag = ecobagsQuery.data.filter((ecobag) => {
      return ecobag.usageCount >= goalCnt;
    }).length;
  }

  return (
    <S.InfoDiv>
      <S.InfoHeaderDiv>나의 아이템</S.InfoHeaderDiv>
      <S.InfoContentsDiv>
        <S.ContentPart>
          <S.InfoLabel>
            텀블러
            <br />
            달성개수
            <br />
            <br />
          </S.InfoLabel>
          <S.InfoValue>
            {tumblersQuery.data ? tumblersQuery.data.length : 0}개<br />
            {achivedCnt.tumbler}개<br />
          </S.InfoValue>
        </S.ContentPart>
        <S.ContentPart>
          <S.InfoLabel>
            에코백
            <br />
            달성개수
            <br />
            <br />
          </S.InfoLabel>
          <S.InfoValue>
            {ecobagsQuery.data ? ecobagsQuery.data.length : 0}개<br />
            {achivedCnt.ecobag}개<br />
          </S.InfoValue>
        </S.ContentPart>
      </S.InfoContentsDiv>
    </S.InfoDiv>
  );
}

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getItemList } from "@api/item";
import * as S from "./style";

export default function AllInfo({ category }) {
  const total = {
    usageCnt: 0,
    goalUsageCnt: 0,
    usagePercent: 0,
    totalCnt: 0,
    achivedCnt: 0,
    achivedPercent: 0,
  };
  const itemsQuery = useQuery({
    queryKey: [category, "list"],
    queryFn: () => {
      return getItemList(category);
    },
  });

  if (itemsQuery.isLoading || itemsQuery.isError) return null;
  if (itemsQuery.isSuccess) {
    total.achivedCnt = itemsQuery.data.filter((item) => {
      total.usageCnt += Number(item.currentUsageCount);
      total.goalUsageCnt += Number(item.goalUsageCount);
      return item.usageCount >= item.goalUsageCount;
    }).length;
    total.usagePercent = Math.round(
      (total.usageCnt / total.goalUsageCnt) * 100
    );
    total.totalCnt = itemsQuery.data.length;
    total.achivedPercent = Math.round(
      (total.achivedCnt / total.totalCnt) * 100
    );
  }

  return (
    <S.InfoContainer>
      <S.InfoHeaderDiv>
        나의 {category === "tumbler" ? "텀블러" : "에코백"}
      </S.InfoHeaderDiv>
      <S.InfoContentsDiv>
        <S.ContentPart>
          <S.InfoLabel>
            보유 아이템수
            <br />
            달성 아이템수
            <br />
            달성 개수 퍼센트
            <br />
          </S.InfoLabel>
          <S.InfoValue>
            {itemsQuery.data?.length}개<br />
            {total.achivedCnt}개<br />
            {total.achivedPercent}%
          </S.InfoValue>
        </S.ContentPart>
        <S.ContentPart>
          <S.InfoLabel>
            총 사용횟수
            <br />
            총 목표횟수
            <br />
            사용 횟수 퍼센트
            <br />
          </S.InfoLabel>
          <S.InfoValue>
            {total.usageCnt}회<br />
            {total.goalUsageCnt}회<br />
            {total.usagePercent}%<br />
          </S.InfoValue>
        </S.ContentPart>
      </S.InfoContentsDiv>
    </S.InfoContainer>
  );
}

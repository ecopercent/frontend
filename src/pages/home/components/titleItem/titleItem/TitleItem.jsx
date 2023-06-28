import React from "react";
import ItmeImageStroke from "./ItmeImageStroke";
import * as S from "./style";

const TitleItem = ({ itemInfo }) => {
  const percent = Math.round(
    (itemInfo.currentUsageCount / itemInfo.goalUsageCount) * 100
  );

  return (
    <div>
      <ItmeImageStroke itemInfo={itemInfo} />
      <S.TitleInfoBox>
        <S.BoldText>{itemInfo.nickname}</S.BoldText>
        <S.PercentBox>
          <S.HugePercent percent={percent}>{percent}</S.HugePercent>
          <S.BoldText>%</S.BoldText>
        </S.PercentBox>
        <S.NormalText>
          현재 <S.BoldText>{itemInfo.currentUsageCount}</S.BoldText>회
        </S.NormalText>
        <S.NormalText>
          목표 <S.BoldText>{itemInfo.goalUsageCount}</S.BoldText>회
        </S.NormalText>
      </S.TitleInfoBox>
    </div>
  );
};

export default TitleItem;

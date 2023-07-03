import React, { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchUsageCountUp } from "src/api/item";
import { lightGray } from "@style/color";
import * as S from "./style";

function toPieChartItemPath(x, y, radiusIn, radiusOut, startAngle, endAngle) {
  function toXY(cX, cY, r, degrees) {
    const rad = degrees * (Math.PI / 180.0);
    return {
      x: cX + r * Math.cos(rad),
      y: cY + r * Math.sin(rad),
    };
  }

  const startIn = toXY(x, y, radiusIn, endAngle);
  const endIn = toXY(x, y, radiusIn, startAngle);
  const startOut = toXY(x, y, radiusOut, endAngle);
  const endOut = toXY(x, y, radiusOut, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  const d = `M${startIn.x},${startIn.y} L${startOut.x},${startOut.y} A${radiusOut},${radiusOut} 0 ${arcSweep},0 ${endOut.x},${endOut.y} L${endIn.x},${endIn.y} A${radiusIn},${radiusIn} 0 ${arcSweep},1 ${startIn.x},${startIn.y} z`;
  return d;
}

const threeStrockInfo = [
  {
    key: 1,
    d: toPieChartItemPath(100, 100, 75, 80, 511, 629),
  },
  {
    key: 2,
    d: toPieChartItemPath(100, 100, 75, 80, 391, 509),
  },
  {
    key: 3,
    d: toPieChartItemPath(100, 100, 75, 80, 271, 389),
  },
];

const oneStrockInfo = [
  {
    key: 1,
    d: toPieChartItemPath(100, 100, 75, 80, 271, 629),
  },
];

const ItmeImageStroke = ({ itemInfo }) => {
  const divideNum = itemInfo.category === "tumbler" ? 3 : 1;
  const [usageCount, setUsageCount] = useState(itemInfo.usageCountPerDay);
  const queryClient = useQueryClient();
  const upUsageCountMutation = useMutation({
    mutationFn: patchUsageCountUp,
    onSuccess: (updatedItemInfo) => {
      setUsageCount(updatedItemInfo.usageCountPerDay);
      queryClient.setQueryData(["title", itemInfo.category], updatedItemInfo);
      queryClient.refetchQueries(["title", itemInfo.category]);
      queryClient.invalidateQueries([itemInfo.category, "list"]);
    },
  });
  const increaseCount = useCallback(() => {
    if (usageCount < divideNum) upUsageCountMutation.mutate(itemInfo.id);
  }, [usageCount]);

  return (
    <svg width="200" height="200" viewBox="0 0 200 200" onClick={increaseCount}>
      <g>
        <foreignObject x="25" y="25" width="100%" height="100%">
          <S.ImageClipper
            src={itemInfo.image || `img/default_${itemInfo.category}.png`}
            alt="아이템 이미지"
          />
        </foreignObject>
        {(divideNum === 3 ? threeStrockInfo : oneStrockInfo).map((element) => {
          if (element.key <= divideNum - itemInfo.usageCountPerDay)
            return <S.StrokePath d={element.d} key={element.key} />;
          return (
            <S.StrokePath
              d={element.d}
              style={{ fill: lightGray }}
              key={element.key}
            />
          );
        })}
      </g>
    </svg>
  );
};

export default ItmeImageStroke;

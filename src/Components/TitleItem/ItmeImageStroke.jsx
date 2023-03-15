import React, { useCallback, useState, useRef } from "react";
import { ImageClipper } from "./style";

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

const ItmeImageStroke = ({ divideNum, imagePath }) => {
  const [useCount, setUseCount] = useState(divideNum);
  const pathRefList = useRef({});
  const increaseCount = useCallback(() => {
    if (useCount > 0) {
      const targetRef = pathRefList.current[useCount];
      targetRef.style.display = "none";
      // targetRef.blur();
      setUseCount((currUseCount) => {
        return currUseCount > 1 ? currUseCount - 1 : 0;
      });
      // patch api 날리기
    }
  }, [useCount]);

  return (
    <div>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        onClick={increaseCount}
      >
        <g>
          <foreignObject x="50" y="50" width="100%" height="100%">
            <ImageClipper src={imagePath} alt="아이템 이미지" />
          </foreignObject>
          {divideNum === 3 ? (
            <>
              <path
                key={3}
                ref={(ref) => {
                  pathRefList.current[3] = ref;
                }}
                d={toPieChartItemPath(100, 100, 75, 80, 271, 389)}
              />
              <path
                key={2}
                ref={(ref) => {
                  pathRefList.current[2] = ref;
                }}
                d={toPieChartItemPath(100, 100, 75, 80, 391, 509)}
              />
              <path
                key={1}
                ref={(ref) => {
                  pathRefList.current[1] = ref;
                }}
                d={toPieChartItemPath(100, 100, 75, 80, 511, 629)}
              />
            </>
          ) : (
            <path
              key={1}
              ref={(ref) => {
                pathRefList.current[1] = ref;
              }}
              d={toPieChartItemPath(100, 100, 75, 80, 271, 629)}
            />
          )}
        </g>
      </svg>
    </div>
  );
};

export default ItmeImageStroke;

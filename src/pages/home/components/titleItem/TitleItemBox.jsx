import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTitleItem } from "src/api/item";
import ConvertButtons from "./convertBtn/ConvertButtons";
import TitleItem from "./titleItem/TitleItem";
import NoTitleItem from "./titleItem/NoTitleItem";
import * as S from "./style";

export default function TitleItemBox() {
  const titleTumblerQuery = useQuery({
    queryKey: ["title", "tumbler"],
    queryFn: () => {
      return getTitleItem("tumbler");
    },
  });

  const titleEcobagQuery = useQuery({
    queryKey: ["title", "ecobag"],
    queryFn: () => {
      return getTitleItem("ecobag");
    },
  });

  // TODO: 로컬스토리지에 고유키 함께 넣어야함(getUser의 값 갖다 쓰기?)
  let localSavedSet = localStorage.getItem(`titleSet`);
  localSavedSet = localSavedSet
    ? JSON.parse(localSavedSet)
    : { tumbler: true, ecobag: true };
  const [itemTab, setItemTab] = useState(localSavedSet);

  const noItem = !titleTumblerQuery?.data && !titleEcobagQuery?.data;
  const hasBoth = titleTumblerQuery?.data && titleEcobagQuery?.data;

  return (
    <S.TitleItemBox>
      {noItem ? (
        <NoTitleItem />
      ) : (
        <>
          <S.TabContainer>
            <ConvertButtons hasBoth={hasBoth} setItemTab={setItemTab} />
          </S.TabContainer>
          <S.TitleItemContainer>
            {itemTab.tumbler && titleTumblerQuery?.data && (
              <TitleItem itemInfo={titleTumblerQuery.data} />
            )}
            {itemTab.ecobag && titleEcobagQuery?.data && (
              <TitleItem itemInfo={titleEcobagQuery.data} />
            )}
          </S.TitleItemContainer>
        </>
      )}
    </S.TitleItemBox>
  );
}

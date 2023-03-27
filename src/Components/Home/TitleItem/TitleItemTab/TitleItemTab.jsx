import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { getTitleItem } from "../../../../Api/item";
import TabButtons from "./TabButtons";
import TitleItem from "../TitleItem";
import * as S from "./style";
import { TitleItemContainer } from "../style";
import { getLogin } from "../../../../Layouts/Login/Login";

export default function TitleItemTab() {
  const userId = getLogin();
  if (!userId) return <Navigate to="/" />;

  const titleTumblerQuery = useQuery({
    queryKey: ["titleTumbler", userId],
    queryFn: () => {
      return getTitleItem(userId, "tumbler");
    },
  });

  const titleEcobagQuery = useQuery({
    queryKey: ["titleEcobag", userId],
    queryFn: () => {
      return getTitleItem(userId, "ecobag");
    },
  });

  let localSavedSet = localStorage.getItem(`titleSet${userId}`);
  localSavedSet = localSavedSet
    ? JSON.parse(localSavedSet)
    : { tumbler: true, ecobag: true };
  const [itemTab, setItemTab] = useState(localSavedSet);

  return (
    <>
      <S.TabContainer>
        {(titleTumblerQuery?.data || titleEcobagQuery?.data) && (
          <TabButtons
            userId={userId}
            hasBoth={!!titleTumblerQuery?.data && !!titleEcobagQuery?.data}
            setItemTab={setItemTab}
          />
        )}
      </S.TabContainer>
      <TitleItemContainer>
        {itemTab.tumbler && titleTumblerQuery?.data && (
          <TitleItem itemInfo={titleTumblerQuery.data} />
        )}
        {itemTab.ecobag && titleEcobagQuery?.data && (
          <TitleItem itemInfo={titleEcobagQuery.data} />
        )}
      </TitleItemContainer>
      {titleTumblerQuery?.data === undefined &&
        titleEcobagQuery?.data === undefined && <div>아이템을 등록하세요.</div>}
    </>
  );
}

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { getTitleItem } from "../../../Api/item";
import ConvertButtons from "./ConvertBtn/ConvertButtons";
import TitleItem from "./TitleItem/TitleItem";
import NoTitleItem from "./TitleItem/NoTitleItem";
import * as S from "./style";
import { getLogin } from "../../../Layouts/Login/Login";

export default function TitleItemBox() {
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
          <ConvertButtons
            userId={userId}
            hasBoth={!!titleTumblerQuery?.data && !!titleEcobagQuery?.data}
            setItemTab={setItemTab}
          />
        )}
      </S.TabContainer>
      <S.TitleItemContainer>
        {itemTab.tumbler && titleTumblerQuery?.data && (
          <TitleItem itemInfo={titleTumblerQuery.data} userId={userId} />
        )}
        {itemTab.ecobag && titleEcobagQuery?.data && (
          <TitleItem itemInfo={titleEcobagQuery.data} userId={userId} />
        )}
      </S.TitleItemContainer>
      {titleTumblerQuery?.data === null && titleEcobagQuery?.data === null && (
        <NoTitleItem />
      )}
    </>
  );
}

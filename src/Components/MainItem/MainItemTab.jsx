import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../Api/user";
import getItem from "../../Api/item";
import TabButtons from "./TabButtons";
import TitleItem from "../TitleItem/TitleItem";
import * as S from "./style";
import { TitleItemContainer } from "../TitleItem/style";

export default function MainItemTab({ userId }) {
  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  const mainTumblerQuery = useQuery({
    queryKey: ["mainTumbler", userId],
    queryFn: () => {
      return getItem(userQuery.data.titleTumblerId);
    },
    enabled: !!userQuery.data?.titleTumblerId,
  });

  const mainEcobagQuery = useQuery({
    queryKey: ["mainEcobag", userId],
    queryFn: () => {
      return getItem(userQuery.data.titleEcobagId);
    },
    enabled: !!userQuery.data?.titleEcobagId,
  });

  let localSavedSet = localStorage.getItem(`mainSet${userId}`);
  localSavedSet = localSavedSet
    ? JSON.parse(localSavedSet)
    : { tumbler: true, ecobag: true };
  const [itemTab, setItemTab] = useState(localSavedSet);

  return (
    <>
      <S.TabContainer>
        {(mainTumblerQuery?.data || mainEcobagQuery?.data) && (
          <TabButtons
            userId={userId}
            hasTumbler={!!mainTumblerQuery?.data}
            hasEcobag={!!mainEcobagQuery?.data}
            setItemTab={setItemTab}
          />
        )}
      </S.TabContainer>
      <TitleItemContainer>
        {itemTab.tumbler && mainTumblerQuery?.data && (
          <TitleItem itemInfo={mainTumblerQuery.data} />
        )}
        {itemTab.ecobag && mainEcobagQuery?.data && (
          <TitleItem itemInfo={mainEcobagQuery.data} />
        )}
      </TitleItemContainer>
      {mainTumblerQuery?.data === undefined &&
        mainEcobagQuery?.data === undefined && <div>아이템을 등록하세요.</div>}
    </>
  );
}

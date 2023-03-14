import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../Api/user";
import getItem from "../../Api/item";
import TabButtons from "./TabButtons";
import * as S from "./style";

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

  let localSavedSet = localStorage.getItem("mainTabSetting");
  localSavedSet = localSavedSet
    ? JSON.parse(localSavedSet)
    : { tumbler: true, ecobag: true };
  const [itemTab, setItemTab] = useState(localSavedSet);

  return (
	<>
    <S.TabContainer>
      {(mainTumblerQuery?.data || mainEcobagQuery?.data) && (
        <TabButtons
          hasTumbler={!!mainTumblerQuery?.data}
          hasEcobag={!!mainEcobagQuery?.data}
          setItemTab={setItemTab}
        />
      )}
	  </S.TabContainer>
      {/* 테스트용 뷰 */}
      {itemTab.tumbler && mainTumblerQuery?.data && (
        <div>{mainTumblerQuery.data.nickname}</div>
      )}
      {itemTab.ecobag && mainEcobagQuery?.data && (
        <div>{mainEcobagQuery.data.nickname}</div>
      )}
      {mainTumblerQuery?.data === undefined &&
        mainEcobagQuery?.data === undefined && <div>아이템을 등록하세요.</div>}
		</>
  );
}

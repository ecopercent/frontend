import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../Api/user";
import getItem from "../../Api/item";

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

  if (
    (mainTumblerQuery.data === undefined && itemTab.tumbler) ||
    (mainEcobagQuery.data === undefined && itemTab.ecobag)
  ) {
    setItemTab({
      ecobag: mainEcobagQuery.data !== undefined,
      tumbler: mainTumblerQuery.data !== undefined,
    });
    localStorage.setItem(
      "mainTabSetting",
      JSON.stringify({
        ecobag: mainEcobagQuery.data !== undefined,
        tumbler: mainTumblerQuery.data !== undefined,
      })
    );
  }

  return (
    <div>
      {(mainTumblerQuery?.data || mainEcobagQuery?.data) && (
        <TabButtons
          hasTumbler={!!mainTumblerQuery?.data}
          hasEcobag={!!mainEcobagQuery?.data}
          setItemTab={setItemTab}
        />
      )}
      {/* 테스트용 뷰 */}
      {itemTab.tumbler && mainTumblerQuery?.data && (
        <div>{mainTumblerQuery.data.nickname}</div>
      )}
      {itemTab.ecobag && mainEcobagQuery?.data && (
        <div>{mainEcobagQuery.data.nickname}</div>
      )}
      {mainTumblerQuery?.data === undefined &&
        mainEcobagQuery?.data === undefined && <div>아이템을 등록하세요.</div>}
    </div>
  );
}

function TabButtons({ hasTumbler, hasEcobag, setItemTab }) {
  const [tryConvert, setTryConvert] = useState(false);

  return (
    <div>
      {tryConvert && (
        <div>
          <button
            type="button"
            disabled={!hasTumbler || !hasEcobag}
            onClick={() => {
              setItemTab({
                tumbler: true,
                ecobag: true,
              });
              localStorage.setItem(
                "mainTabSetting",
                JSON.stringify({ tumbler: true, ecobag: true })
              );
            }}
          >
            전체
          </button>
          <button
            type="button"
            disabled={!hasTumbler}
            onClick={() => {
              setItemTab({
                tumbler: true,
                ecobag: false,
              });
              localStorage.setItem(
                "mainTabSetting",
                JSON.stringify({ tumbler: true, ecobag: false })
              );
            }}
          >
            텀블러
          </button>
          <button
            type="button"
            disabled={!hasEcobag}
            onClick={() => {
              setItemTab({
                tumbler: false,
                ecobag: true,
              });
              localStorage.setItem(
                "mainTabSetting",
                JSON.stringify({ tumbler: false, ecobag: true })
              );
            }}
          >
            에코백
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={() => {
          return setTryConvert(!tryConvert);
        }}
      >
        메인변경
      </button>
    </div>
  );
}

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
  
  console.log(userQuery.data);

  const mainTumblerQuery = useQuery({
	queryKey: ["mainTumbler", userId],
	queryFn: () => {
		return getItem(userQuery.data.titleTumblerId)
	},
	enabled: !!userQuery.data?.titleTumblerId
  });

  const mainEcobagQuery = useQuery({
	queryKey: ["mainEcobag", userId],
	queryFn: () => {
		return getItem(userQuery.data.titleEcobagId)
	},
	enabled:!!userQuery.data?.titleEcobagId
  });

  console.log(mainTumblerQuery.data, mainEcobagQuery.data);

  const [itemTab, setItemTab] = useState({
    tumbler: true,
    ecobag: true,
  });

  return (
    <div>
      <TabButtons setItemTab={setItemTab} />
      {/* 테스트용 뷰 */}
      {itemTab.tumbler && <span>텀블러</span>}
      {itemTab.ecobag && <span>에코백</span>}
    </div>
  );
}

function TabButtons({ setItemTab }) {
  const [tryConvert, setTryConvert] = useState(false);

  return (
    <div>
      {tryConvert && (
        <div>
          <button
            type="button"
            onClick={() => {
              setItemTab({
                tumbler: true,
                ecobag: true,
              });
            }}
          >
            전체
          </button>
          <button
            type="button"
            onClick={() => {
              setItemTab({
                tumbler: true,
                ecobag: false,
              });
            }}
          >
            텀블러
          </button>
          <button
            type="button"
            onClick={() => {
              setItemTab({
                tumbler: false,
                ecobag: true,
              });
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

import React, { useState } from "react";

export default function MainItemTab() {
  const [itemTab, setItemTab] = useState({
    tumbler: false,
    ecobag: false,
  });

  return (
    <div>
      <TabButtons setItemTab={setItemTab} />
      {itemTab.tumbler && <span>텀블러</span>}
      {itemTab.ecobag && <span>에코백</span>}
      {itemTab.tumbler || itemTab.ecobag || <span>아이템을 등록하세요.</span>}
      <MainItem tumbler={itemTab.tumbler} ecobag={itemTab.ecobag} />
    </div>
  );
}

function TabButtons({ setItemTab }) {
  const [tryConvert, setTryConvert] = useState(false);

  return (
    <div>
		{tryConvert && 
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
      </div>}
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

function MainItem({ tumbler, ecobag }) {
  if (!tumbler && !ecobag)
    return (
      <div>
        <span>아이템을 등록하세요.</span>
      </div>
    );

  return (
    <div>
      {tumbler && <span>텀블러</span>}
      {ecobag && <span>에코백</span>}
    </div>
  );
}

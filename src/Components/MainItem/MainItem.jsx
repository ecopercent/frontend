import { findAllByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";

export default function MainItemTab() {
  const [tumblerTab, setTumblerTab] = useState(false);
  const [ecobagTab, setEcobagTab] = useState(findAllByDisplayValue);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setTumblerTab(true);
            setEcobagTab(true);
          }}
        >
          전체
        </button>
        <button
          onClick={() => {
            setTumblerTab(true);
            setEcobagTab(false);
          }}
        >
          텀블러
        </button>
        <button
          onClick={() => {
            setTumblerTab(false);
            setEcobagTab(true);
          }}
        >
          에코백
        </button>
        <button>메인변경</button>
      </div>
	  {tumblerTab && <span>텀블러</span>}
	  {ecobagTab && <span>에코백</span>}
	  {tumblerTab || ecobagTab || <span>아이템을 등록하세요.</span>}
      <MainItem tumbler={tumblerTab} ecobag={ecobagTab} />
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

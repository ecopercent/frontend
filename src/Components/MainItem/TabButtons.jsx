import React, { useState } from "react";
import { MdOutlineViewCarousel, MdOutlineShoppingBag } from "react-icons/md";
import { TbCup } from "react-icons/tb";
import * as S from "./style";

export default function TabButtons({
  userId,
  hasTumbler,
  hasEcobag,
  setItemTab,
}) {
  const [tryConvert, setTryConvert] = useState(false);

  function handleClick(tumblerValue, ecobagValue) {
    const settingValue = {
      tumbler: tumblerValue,
      ecobag: ecobagValue,
    };
    setItemTab(settingValue);
    localStorage.setItem(`mainSet${userId}`, JSON.stringify(settingValue));
  }

  return (
    <S.AllBtnsContainer>
      {tryConvert && (
        <S.MainSetBtnsWrapper>
          <S.BothItemBtn
            id="both"
            type="button"
            disabled={!hasTumbler || !hasEcobag}
            onClick={() => {
              handleClick(true, true);
            }}
          >
            <MdOutlineShoppingBag
              size={20}
              style={{ position: "absolute", left: "5px", top: "7px" }}
            />
            <TbCup
              size={20}
              style={{ position: "absolute", right: "4px", bottom: "7px" }}
            />
          </S.BothItemBtn>
          <S.MainSetBtn
            id="tumbler"
            type="button"
            disabled={!hasTumbler}
            onClick={() => {
              handleClick(true, false);
            }}
          >
            <TbCup size={25} />
          </S.MainSetBtn>
          <S.MainSetBtn
            id="ecobag"
            type="button"
            disabled={!hasEcobag}
            onClick={() => {
              handleClick(false, true);
            }}
          >
            <MdOutlineShoppingBag size={25} />
          </S.MainSetBtn>
        </S.MainSetBtnsWrapper>
      )}
      <S.ConvertBtn
        onClick={() => {
          setTryConvert(!tryConvert);
        }}
      >
        <MdOutlineViewCarousel size={30} />
      </S.ConvertBtn>
    </S.AllBtnsContainer>
  );
}

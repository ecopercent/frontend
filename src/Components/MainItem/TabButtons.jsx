import React, { useState } from "react";
import { MdOutlineViewCarousel, MdOutlineShoppingBag } from "react-icons/md";
import {TbCup} from "react-icons/tb";
import * as S from "./style";

export default function TabButtons({ hasTumbler, hasEcobag, setItemTab }) {
	const [tryConvert, setTryConvert] = useState(false);
  
	return (
	  <S.AllBtnsContainer>
		{tryConvert && (
		  <S.MainSetBtnsWrapper>
			<S.ItemMixBtn
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
			  <MdOutlineShoppingBag size={20} style={{position:"absolute", left:"5px", top:"7px"}} />
			  <TbCup size={20} style={{position:"absolute", right:"4px", bottom:"7px"}} />
			</S.ItemMixBtn>
			<S.MainSetBtn
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
			  <TbCup size={25} />
			</S.MainSetBtn>
			<S.MainSetBtn
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
			  <MdOutlineShoppingBag size={25} />
			</S.MainSetBtn>
		  </S.MainSetBtnsWrapper>
		)}
		<S.ConvertBtn
		  onClick={() =>  {
			  return setTryConvert(!tryConvert);
		  }} >
		  <MdOutlineViewCarousel size={30} />
	  </S.ConvertBtn>
	  </S.AllBtnsContainer>
	);
  }
  
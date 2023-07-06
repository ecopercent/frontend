import React from "react";
import styled from "@emotion/styled";
import { basicGreen } from "@style/color";

export default function Spinner({ size }) {
  return (
    <Background size={size}>
      <SpinnerCSS size={size} />
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: ${(props) => {
    return `calc(-${props.size} / 2) calc(-${props.size} / 2)`;
  }};
`;

const SpinnerCSS = styled.div`
  width: ${(props) => {
    return props.size;
  }};
  color: ${basicGreen};
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 15deg, #0003, #000);
  mask: conic-gradient(from 15deg, #0003, #000);
  animation: load 1s steps(12) infinite;
  background: radial-gradient(
        closest-side at 50% 12.5%,
        currentColor 90%,
        #0000 98%
      )
      50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%, currentColor 90%, #0000 98%) 0
      50%/80% 20% repeat-x;

  ::before,
  ::after {
    background: radial-gradient(
          closest-side at 50% 12.5%,
          currentColor 90%,
          #0000 98%
        )
        50% 0/20% 80% repeat-y,
      radial-gradient(closest-side at 12.5% 50%, currentColor 90%, #0000 98%) 0
        50%/80% 20% repeat-x;
  }
  ::before,
  ::after {
    content: "";
    grid-area: 1/1;
    transform: rotate(30deg);
  }
  ::after {
    transform: rotate(60deg);
  }

  @keyframes load {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
`;

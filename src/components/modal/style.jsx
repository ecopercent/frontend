import styled from "@emotion/styled";
import * as btn from "@style/button";
import * as font from "@style/font";
import * as color from "@style/color";

export const backgroundOverlay = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalLayout = styled.div`
  width: 350px;
  height: 200px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${color.ivory};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LargeModalLayout = styled.div`
  width: 350px;
  height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${color.ivory};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

/*
 *      Check Term Of Use Modal
 */

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

export const TermsForm = styled.form`
  width: 85%;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0;
`;

export const ModalTitle = styled.h2`
  ${font.boldTitle3}
  margin: 0;
  text-align: center;
`;

export const ModalContent = styled.span`
  ${font.normalBody}
  line-height: 1.5;
  text-align: center;
`;

export const BtnContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;

  margin: 0px 40px;
`;

export const LabelInputSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 0 10px;
`;

export const ErrorContainer = styled.div`
  height: 30px;
`;

export const ErrorText = styled.div`
  ${font.normalXsmall};
  font-weight: 600;
  text-align: center;
  margin: auto 0 0;
  color: #e01e5a;
  width: 100%;
`;

export const HoverPlain = styled.span`
  ${font.normalSmall}
  height: 22px;
  width: 90%;
  :hover {
    text-decoration: underline;
    color: gray;
  }
  border-radius: 3px;
  cursor: pointer;
`;

export const Plain = styled.span`
  width: 90%;
  border-radius: 3px;
  cursor: pointer;
`;

export const CheckBox = styled.input`
  // position: relative;
  // top: 5.5px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  align-items: center;
  :checked {
    background: ${color.basicGreen};
    border: none;
  }
`;

export const Btn = styled.button`
  ${(props) => {
    if (props.featured) return btn.green;
    if (props.warning) return btn.pink;
    return btn.normal;
  }}
`;

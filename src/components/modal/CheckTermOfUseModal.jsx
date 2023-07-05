import React, { useCallback, useEffect, useState } from "react";
import LargeModal from "./LargeModal";
import * as S from "./style";

const CheckTermOfUseModal = ({ onClose, onSubmit }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [termChecked, setTermChecked] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  // const [privacyChecked, setPrivacyChecked] = useState(false);
  const [validatedCheck, setValidatedCheck] = useState(false);
  const validateCheck = useCallback(() => {
    if (termChecked && agreeChecked) onSubmit();
    else setValidatedCheck(false);
  }, [termChecked, agreeChecked]);
  useEffect(() => {
    setValidatedCheck(true);
    if (termChecked && agreeChecked) setAllChecked(true);
    else setAllChecked(false);
  }, [termChecked, agreeChecked]);
  const onAllCheck = useCallback(() => {
    if (!allChecked) {
      setTermChecked(true);

      setAgreeChecked(true);
      setAllChecked(!allChecked);
    } else {
      setAllChecked(!allChecked);
      setTermChecked(false);
      setAgreeChecked(false);
    }
  }, [allChecked]);

  return (
    <LargeModal onClose={onClose}>
      <S.TextContainer>
        <S.ModalTitle>환영합니다</S.ModalTitle>
        <S.ModalTitle>
          에코퍼센트 이용을 위해
          <br />
          아래 약관에 동의해주세요.
        </S.ModalTitle>
      </S.TextContainer>
      <S.TermsForm>
        <S.LabelInputSet>
          <S.CheckBox
            type="checkbox"
            checked={allChecked}
            onChange={onAllCheck}
          />
          <S.Plain onClick={onAllCheck}>전체동의</S.Plain>
        </S.LabelInputSet>
        <hr style={{ width: "100%" }} />
        <S.LabelInputSet>
          <S.CheckBox
            type="checkbox"
            checked={termChecked}
            onChange={() => {
              setTermChecked(!termChecked);
            }}
          />
          <S.HoverPlain
            onClick={() => {
              window.open(
                "https://ecopercent.notion.site/962969ee318545cf9dc2b70b5067fcb2",
                "_blank"
              );
            }}
          >
            이용약관 동의 (필수)
          </S.HoverPlain>
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.CheckBox
            type="checkbox"
            checked={agreeChecked}
            onChange={() => {
              setAgreeChecked(!agreeChecked);
            }}
          />
          <S.HoverPlain
            onClick={() => {
              window.open(
                "https://ecopercent.notion.site/c7b9f6b4b8894c7881dbb846d26ec15f",
                "_blank"
              );
            }}
          >
            개인정보 수집 및 이용 동의 (필수)
          </S.HoverPlain>
        </S.LabelInputSet>
      </S.TermsForm>
      <S.ErrorContainer>
        {!validatedCheck && (
          <S.ErrorText>필수 항목을 모두 동의해주세요</S.ErrorText>
        )}
      </S.ErrorContainer>
      <S.BtnContainer>
        <S.Btn type="reset" onClick={onClose}>
          취소
        </S.Btn>
        <S.Btn featured onClick={validateCheck}>
          등록
        </S.Btn>
      </S.BtnContainer>
    </LargeModal>
  );
};

export default CheckTermOfUseModal;

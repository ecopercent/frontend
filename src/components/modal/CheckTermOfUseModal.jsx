import React, { useCallback, useEffect, useState } from "react";
import LargeModal from "./LargeModal";
import * as S from "./style";

const CheckTermOfUseModal = ({ onClose, onSubmit }) => {
  const [showType, setShowType] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const [termChecked, setTermChecked] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [validatedCheck, setValidatedCheck] = useState(false);
  const validateCheck = useCallback(() => {
    if (termChecked && locationChecked && privacyChecked) onSubmit();
    else setValidatedCheck(false);
  }, [termChecked, privacyChecked, locationChecked]);
  useEffect(() => {
    setValidatedCheck(true);
    if (termChecked && privacyChecked && locationChecked) setAllChecked(true);
    else setAllChecked(false);
  }, [termChecked, privacyChecked, locationChecked]);

  switch (showType) {
    case "term":
      return (
        <LargeModal onClose={onClose}>
          <button
            onClick={() => {
              setShowType("");
            }}
          >
            뒤로가기
          </button>
          <iframe
            style={{ backgroundColor: "white" }}
            src="/docs/term.html"
            title="이용약관"
            height="440"
            width="320"
          />
        </LargeModal>
      );
    case "privacy":
      return (
        <LargeModal onClose={onClose}>
          <button
            onClick={() => {
              setShowType("");
            }}
          >
            뒤로가기
          </button>
          <iframe
            style={{ backgroundColor: "white" }}
            src="/docs/privacy.html"
            title="개인정보처리방침"
            height="440"
            width="320"
          />
        </LargeModal>
      );
    case "agree":
      return (
        <LargeModal onClose={onClose}>
          <button
            onClick={() => {
              setShowType("");
            }}
          >
            뒤로가기
          </button>
          <iframe
            style={{ backgroundColor: "white" }}
            src="/docs/agree.html"
            title="개인정보처리동의"
            height="440"
            width="320"
          />
        </LargeModal>
      );
    case "":
    default:
      return (
        <LargeModal onClose={onClose}>
          <S.TextContainer>
            <S.ModalTitle>환영합니다</S.ModalTitle>
            <S.ModalTitle>에코퍼센트 이용을 위해</S.ModalTitle>
            <S.ModalTitle>아래 약관에 동의해주세요.</S.ModalTitle>
            <form>
              <S.LabelInputSet>
                <S.CheckBox
                  type="checkbox"
                  checked={allChecked}
                  onChange={() => {
                    if (!allChecked) {
                      setTermChecked(true);
                      setPrivacyChecked(true);
                      setLocationChecked(true);
                      setAllChecked(!allChecked);
                    } else {
                      setAllChecked(!allChecked);
                      setTermChecked(false);
                      setPrivacyChecked(false);
                      setLocationChecked(false);
                    }
                  }}
                />
                <S.Plain>전체동의</S.Plain>
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
                    setShowType("term");
                  }}
                >
                  이용약관 동의 (필수)
                </S.HoverPlain>
              </S.LabelInputSet>
              <S.LabelInputSet>
                <S.CheckBox
                  type="checkbox"
                  checked={privacyChecked}
                  onChange={() => {
                    setPrivacyChecked(!privacyChecked);
                  }}
                />
                <S.HoverPlain
                  onClick={() => {
                    setShowType("privacy");
                  }}
                >
                  개인정보 처리 방침 동의 (필수)
                </S.HoverPlain>
              </S.LabelInputSet>
              <S.LabelInputSet>
                <S.CheckBox
                  type="checkbox"
                  checked={locationChecked}
                  onChange={() => {
                    setLocationChecked(!locationChecked);
                  }}
                />
                <S.HoverPlain
                  onClick={() => {
                    setShowType("agree");
                  }}
                >
                  개인정보 수집 및 이용 동의 (필수)
                </S.HoverPlain>
              </S.LabelInputSet>
            </form>
          </S.TextContainer>
          <S.ErrorContainer>
            {!validatedCheck && (
              <S.ErrorText>필수 항목을 모두 동의해주세요</S.ErrorText>
            )}
          </S.ErrorContainer>
          <S.BtnContainer>
            <S.Btn type="reset" onClick={onClose}>
              취소
            </S.Btn>
            <S.Btn warning onClick={validateCheck}>
              등록
            </S.Btn>
          </S.BtnContainer>
        </LargeModal>
      );
  }
};

export default CheckTermOfUseModal;

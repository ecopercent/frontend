import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PcPageWrap } from "../../Layouts/Main/style";
import * as S from "./style";

export default function SignUp() {
  const navigate = useNavigate();
  const [tumblerAdd, setTumblerAdd] = useState(false);
  const [ecobagAdd, setEcobagAdd] = useState(false);

  return (
    <PcPageWrap style={{ paddingBottom: "0" }}>
      <S.SignUpLayoutCol>
        <S.InputList>
          <S.InputItem>
            <div
              style={{
                width: "130px",
                height: "130px",
                backgroundColor: "gray",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              {/* TODO: 프로필 이미지 input은 이미지 서버 완료 후에 재작업 */}
              이미지 Input
            </div>
          </S.InputItem>
          <S.InputItem>
            <S.Label htmlFor="nickname">
              닉네임 <span style={{ color: "red" }}>*</span>
            </S.Label>
            <S.Input id="nickname" type="text" />
            <S.Btn
              type="button"
              onClick={() => {
                // TODO: 닉네임 중복확인 api, 닉네임 확인 처리
                return alert("닉네임 중복 확인 api");
              }}
            >
              중복확인
            </S.Btn>
          </S.InputItem>
          <S.InputItem>
            <S.TextareaHr />
            <S.Label htmlFor="msg">소개</S.Label>
            <S.Textarea id="msg" type="textarea" />
          </S.InputItem>
          <S.InputItem col>
            <S.LabelBox>
              <S.Label htmlFor="tumbler">텀블러</S.Label>
              {tumblerAdd ? (
                <>
                  <S.Btn
                    onClick={() => {
                      // TODO: 아이템 수정 페이지에서 [등록] 누르면 데이터 세팅
                      alert("아이템 수정 페이지로 이동!");
                    }}
                  >
                    수정
                  </S.Btn>
                  <S.Btn
                    delete
                    onClick={() => {
                      // TODO: 삭제 확인 모달
                      alert("삭제 확인 모달!");
                      setTumblerAdd(false);
                    }}
                  >
                    등록취소
                  </S.Btn>
                </>
              ) : (
                <S.Btn
                  onClick={() => {
                    // TODO: 아이템 추가 페이지에서 [등록] 누르면 true로 세팅
                    alert("아이템 추가 페이지로 이동!");
                    setTumblerAdd(true);
                  }}
                >
                  등록
                </S.Btn>
              )}
            </S.LabelBox>
            {tumblerAdd ? (
              <p>텀블러 정보</p>
            ) : (
              <S.NoticeText>아이템은 나중에 등록할 수 있습니다.</S.NoticeText>
            )}
          </S.InputItem>
          <S.InputItem col>
            <S.LabelBox>
              <S.Label htmlFor="ecobag">에코백</S.Label>
              {ecobagAdd ? (
                <>
                  <S.Btn
                    onClick={() => {
                      // TODO: 아이템 수정 페이지에서 [등록] 누르면 데이터 세팅
                      alert("아이템 수정 페이지로 이동!");
                    }}
                  >
                    수정
                  </S.Btn>
                  <S.Btn
                    delete
                    onClick={() => {
                      // TODO: 삭제 확인 모달
                      alert("삭제 확인 모달!");
                      setEcobagAdd(false);
                    }}
                  >
                    등록취소
                  </S.Btn>
                </>
              ) : (
                <S.Btn
                  onClick={() => {
                    // TODO: 아이템 추가 페이지에서 [등록] 누르면 true로 세팅
                    alert("아이템 추가 페이지로 이동!");
                    setEcobagAdd(true);
                  }}
                >
                  등록
                </S.Btn>
              )}
            </S.LabelBox>
            {ecobagAdd ? (
              <p>에코백 정보</p>
            ) : (
              <S.NoticeText>아이템은 나중에 등록할 수 있습니다.</S.NoticeText>
            )}
          </S.InputItem>
        </S.InputList>
        <S.SubmitBtnsBox>
          <S.Btn
            featured
            onClick={() => {
              // TODO: 입력 유효성 검사
              // TODO: 가입 완료 페이지 구현
              return alert("입력 유효성 검사 > 가입 완료 페이지로..");
            }}
          >
            등록
          </S.Btn>
          <S.Btn
            onClick={() => {
              // TODO: 취소 확인 모달 구현
              alert(
                "(모달) 입력중인 정보는 저장되지 않습니다. 돌아가시겠습니까?"
              );
              return navigate(-1);
            }}
          >
            취소
          </S.Btn>
        </S.SubmitBtnsBox>
      </S.SignUpLayoutCol>
    </PcPageWrap>
  );
}

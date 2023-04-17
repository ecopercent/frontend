import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import kakaoLogin from "./kakaoLogin";
import * as S from "./style";

export default function SocialLogin() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split("/")[2] === "kakao") {
      const params = new URLSearchParams(location.search);
      if (params.has("code")) {
        console.log("카카오 코드 받았어!");
        console.log(params.get("code"));
      }
    }
  }, []);

  return (
    <S.LoginButton onClick={kakaoLogin}>
      <S.LogoImg src="/img/kakaoLogo.png" alt="kakao login" />
    </S.LoginButton>
  );
}

// 효박이의 예제 코드

// export default function SocialLogin() {
//   const navigate = useNavigate();
//   const queryParams = new URLSearchParams(window.location.search);
//   const code = queryParams.get("code");
//   console.log(code);
//   useEffect(() => {
//     if (code) {
//       console.log("gogo", code);
//       axios
//         .post(
//           `https://kauth.kakao.com/oauth/token`,
//           {
//             grant_type: "authorization_code",
//             client_id: `${process.env.REACT_APP_KAKAO_JS_KEY}`,
//             redirect_uri: `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`,
//             code: `${code}`,
//           },
//           {
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
//             },
//           }
//         )
//         .then((kakaoAuthResult) => {
//           console.log(kakaoAuthResult.data);
//           console.log(
//             "여기 kakaoAuthResult.data에 엑세스 들어있습니다~ 엑세스토큰으로 then 안에서 아래처럼 다시 우리 서버에 axios 날리면 돼!"
//           );
//           axios
//             .get(`/login/oauth2/kakao`, {
//               headers: {
//                 Authorization: `Bearer ${
//                   kakaoAuthResult.data.access_token ?? "오잉 왜 토큰이 없지"
//                 }`,
//               },
//             })
//             .then((ecopercentAuthResult) => {
//               if (ecopercentAuthResult.status === 200) {
//                 console.log("쿠키에 있는 우리서버 엑세스 저장 후 메인가기");
//                 navigate("/home");
//               } else if (ecopercentAuthResult.status === 404) {
//                 console.log("회원가입 하러 가기");
//                 navigate("/signup");
//               }
//             })
//             .catch((e) => {
//               console.log("ecopercent kakao auth erro", e);
//             });
//         });
//       console.log("gogo!!");
//     }
//   }, [code]);

//   return (
//     <S.LoginButton onClick={kakaoLogin}>
//       <S.LogoImg src="/img/kakaoLogo.png" alt="kakao login" />
//     </S.LoginButton>
//   );
// }

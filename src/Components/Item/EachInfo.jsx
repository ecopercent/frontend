import React from "react"

export default function EachInfo({ userId, infoItemId }) {
	return (
		<>
			<div>
				<p>아이템닉네임 {userId} {infoItemId}</p>
				<button>대표 설정</button>
				<button>수정</button>
			</div>
			<div>
				<p>브랜드</p>
				<p>타입</p>
				<p>목표횟수</p>
				<p>구입가</p>
				<p>구입일</p>
				<p>사용횟수</p>
			</div>
		</>
	);
}

import React from "react"

export default function AllInfo({ userId }) {
	return (
		<>
			<div>나의 아이템 {userId}</div>
			<div>
				<p>텀블러</p>
				<p>달성개수</p>
				<p>에코백</p>
				<p>달성개수</p>
			</div>
		</>
	);
}

import { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	return (
		<div className="flex flex-col h-full w-full container items-center">
			{isLoading &&
				[0, 1, 2, 3].map((_, i) => (
					<div
						key={i}
						className="animate-pulse w-full h-96 flex flex-col justify-center items-center"
					>
						<div className="rounded-full bg-gray-300 w-11 h-11 mb-2"></div>
						<div className="rounded-lg bg-gray-300 w-full h-80"></div>
					</div>
				))}
			{!isLoading && (
				<>
					<FeedPost
						img="/img1.png"
						username="Bob"
						avatar="/img1.png"
					/>
					<FeedPost
						img="/img2.png"
						username="Bob"
						avatar="/img2.png"
					/>
					<FeedPost
						img="/img3.png"
						username="Bob"
						avatar="/img3.png"
					/>
					<FeedPost
						img="/img4.png"
						username="Bob"
						avatar="/img4.png"
					/>
				</>
			)}
		</div>
	);
};

export default FeedPosts;

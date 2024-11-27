import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import React from "react";

const FeedPost: React.FC<{img: string, username: string, avatar: string} > = ({img , username, avatar}) => {
	return (
		<div className="container mb-5 w-full h-full flex flex-col">
			<PostHeader username={username} avatar={avatar}/>
			<div className="overflow-hidden flex justify-center items-center flex-grow">
				<img
					src={img}
					alt={username}
					className="rounded-lg w-full md:h-[600px] object-cover"
				/>
			</div>
			<PostFooter username={username}/>
		</div>
	);
};

export default FeedPost;

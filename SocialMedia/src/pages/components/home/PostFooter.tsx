import { useState } from "react";
import {
	CommentLogo,
	NotificationsLogo,
	UnlikeLogo,
} from "../../../assets/constants.jsx";
import { useTheme } from "../../../contexts/ThemeContext.js";

const PostFooter: React.FC<{username:string}> = ({username}) => {
	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(1000);

	const handleLike = () => {
		if (liked) {
			setLikes(likes - 1);
		} else {
			setLikes(likes + 1);
		}
		setLiked(!liked);
	};

	const { isDarkMode } = useTheme();

	return (
		<div className="post-footer w-full flex flex-col mt-2 m-1">
			<div className="container mb-1 flex flex-row items-center gap-4 w-full justify-between">
				{/* Container for Like and Comment icons */}
				<div className="flex items-center gap-4">
					{/* Like Button */}
					<div
						className="cursor-pointer hover:text-red-500 transition ease-in-out duration-300"
						onClick={handleLike}
					>
						{!liked ? <NotificationsLogo /> : <UnlikeLogo />}
					</div>

					{/* Comment Button */}
					<div className=" -ml-1 cursor-pointer hover:text-gray-500 transition ease-in-out duration-300">
						<CommentLogo />
					</div>
				</div>
			</div>

			{/* Likes count */}
			<span className="container text-sm text-gray-500">
				{likes} likes
			</span>

			{/* Caption */}
			<div className="container">
				<span
					className={`container text-sm ${
						isDarkMode ? "text-white" : "text-black"
					}`}
				>
					{username}:{" "}
				</span>
				<span className="container text-sm text-gray-500">
					Caption..
				</span>
			</div>

			{/* View comments */}
			<span className="container mb-1 text-sm text-gray-500">
				View 1,000 comments
			</span>

			{/* Comment input */}
			<input
				type="text"
				placeholder="Add a comment..."
				className={`container rounded text-sm ${
					isDarkMode ? "text-white bg-black" : "text-black bg-white"
				}`}
			/>
		</div>
	);
};

export default PostFooter;

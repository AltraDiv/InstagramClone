import React, { useState } from "react";

const SuggestedUser: React.FC<{username: string, avatar: string, followers: number}> = ({username, avatar, followers}) => {
	const [isFollowed, setisFollowed] = useState(false);
    return (
		<div className="w-full">
			<div className="w-full flex gap-3 p-2 items-center">
				<img
					src={avatar}
					alt={`${username}'s avatar`}
					className="rounded-full w-10 h-10 object-cover"
				/>
				<div className="flex flex-col">
					<span className="text-sm font-bold">{username}</span>
					<span className="text-xs text-gray-500">
						{followers} followers
					</span>
				</div>
				{isFollowed ? (
					<span
						onClick={() => setisFollowed(!isFollowed)}
						className="flex justify-center text-center ml-auto text-gray-500 text-sm hover:cursor-pointer"
					>
						UnFollow
					</span>
				) : (
					<span
						onClick={() => setisFollowed(!isFollowed)}
						className="flex justify-center text-center ml-auto text-blue-500 text-sm hover:cursor-pointer"
					>
						Follow
					</span>
				)}
			</div>
		</div>
	);
};

export default SuggestedUser;

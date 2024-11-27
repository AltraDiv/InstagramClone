const PostHeader: React.FC<{username: string, avatar: string}> = ({username, avatar}) => {
	return (
		<div className="flex items-center w-full">
			<img
				src={avatar}
				alt={username}
				className="object-cover rounded-full aspect-square w-11 mx-1 p-1"
			/>
			<span className="text-sm text-bold flex">{username}</span>
            <span className="text-sm text-gray-500 flex ml-2">- 1h</span>
			<div className="ml-auto mx-2 text-sm text-bold text-blue-500 transition ease-in-out delay-100 hover:text-white cursor-pointer">
				Unfollow
			</div>
		</div>
	);
};

export default PostHeader;

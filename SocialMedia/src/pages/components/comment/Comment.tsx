const Comment: React.FC<{
	username: string;
	text: string;
	createdat: string;
	profilepic: string;
}> = ({ username, text, createdat, profilepic }) => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-row space-x-3">
				<img
					src={profilepic}
					alt="Profile"
					className="rounded-full w-8 h-8 object-cover"
				/>
				<div className="flex flex-col">
					<span className="font-bold text-sm">{username}</span>
					<span className="mr-auto text-neutral-500 text-xs">
						{createdat}
					</span>
				</div>

				<p className="text-sm text-neutral-600">{text}</p>
			</div>
		</div>
	);
};

export default Comment;

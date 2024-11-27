import { useTheme } from "../../../contexts/ThemeContext";

const ProfileHeader: React.FC = () => {
	const { isDarkMode } = useTheme();

	return (
		<div className="w-full flex flex-col sm:flex-row gap-4 p-4">
			{/* Profile Picture */}
			<img
				src="http://via.placeholder.com/150"
				alt="Profile"
				className="rounded-full self-center w-20 h-20 sm:w-32 sm:h-32 border-2 border-neutral-800 max-w-full"
			/>

			{/* Info Section */}
			<div className="flex flex-col flex-1">
				{/* Username and Button */}
				<div className="flex flex-wrap items-center gap-2 mt-2">
					<span className="text-lg font-bold">Username</span>
					<button
						className={`flex justify-center items-center px-4 py-2 text-sm rounded-md ${
							isDarkMode
								? "bg-white text-black"
								: "bg-black text-white"
						} hover:opacity-80`}
					>
						Edit Profile
					</button>
				</div>

				{/* Stats Section */}
				<div className="flex flex-wrap gap-4 mt-2 items-center">
						<span className="block font-bold">100</span>
						<span className="text-sm text-neutral-500">Posts</span>
						<span className="block font-bold">1345</span>
						<span className="text-sm text-neutral-500">
							Followers
						</span>
						<span className="block font-bold">1244</span>
						<span className="text-sm text-neutral-500">
							Following
						</span>
				</div>

				{/* Bio Section */}
				<div className="mt-2 text-sm">
					<span>Bio qfighewighiewhgeighiew</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;

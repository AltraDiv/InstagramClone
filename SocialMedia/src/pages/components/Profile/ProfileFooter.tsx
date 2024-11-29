import {
	CommentLogo,
	NotificationsLogo,
	UnlikeLogo,
} from "../../../assets/constants";
import { useTheme } from "../../../contexts/ThemeContext";

const ProfileFooter: React.FC = () => {
    const { isDarkMode } = useTheme();
	return (
		<div className="border-t border-gray-700 pt-4">
			<div className="flex flex-row space-x-4">
				<div className="hover:text-neutral-500 cursor-pointer">
					<NotificationsLogo />
				</div>
				<div className="hover:text-neutral-500 cursor-pointer">
					<CommentLogo />
				</div>
			</div>
			<p className="text-sm flex ml-auto mb-1">1000 likes</p>
			<div className="flex items-center space-x-3">
				<input
					type="text"
					placeholder="Add a comment..."
					className={`flex-1 ${
						isDarkMode
							? "bg-black text-white"
							: "bg-white text-black"
					} px-4 py-2 rounded-lg focus:outline-none`}
				/>
				<button className="text-blue-500 font-medium">Post</button>
			</div>
		</div>
	);
};

export default ProfileFooter;

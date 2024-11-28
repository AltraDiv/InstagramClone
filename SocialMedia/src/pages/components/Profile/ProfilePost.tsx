import React, { useState } from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import Comment from "../comment/Comment";
import {
	CommentLogo,
	NotificationsLogo,
	UnlikeLogo,
} from "../../../assets/constants";
const ProfilePost: React.FC<{ img: string; username: string }> = ({
	img,
	username,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const { isDarkMode } = useTheme();
	return (
		<>
			{/* Image Card */}
			<div
				className="h-full hover:opacity-80 w-full cursor-pointer"
				onClick={() => setIsOpen(true)}
			>
				<img
					src={img}
					className="h-full w-full object-cover"
					alt="Profile post"
				/>
			</div>

			{/* Modal */}
			{isOpen && (
				<div
					id="default-modal"
					aria-hidden="true"
					className={`fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70`}
				>
					<div className="flex bg-white rounded-lg shadow-lg max-w-4xl w-full overflow-hidden">
						{/* Image Section */}
						<div className="flex-1">
							<img
								src={img}
								alt="Post content"
								className="h-full w-full object-cover"
							/>
						</div>

						{/* Content Section */}
						<div
							className={`flex flex-col flex-1  ${
								isDarkMode
									? "bg-black text-white"
									: "bg-white text-black"
							} p-4`}
						>
							{/* Header */}
							<div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
								<div className="flex flex-row w-full">
									<img
										src="http://via.placeholder.com/150"
										alt="Profile"
										className="rounded-full w-8 h-8 object-cover"
									/>
									<h3 className="font-semibold ml-4">
										{username}
									</h3>
								</div>
								<button
									onClick={() => setIsOpen(false)}
									className="text-gray-400 hover:text-white"
								>
									<svg
										className="w-6 h-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>

							{/* Comments Section */}
							<div className="flex-1 overflow-y-auto space-y-4">
								<Comment
									createdat="21d"
									username="user1"
									text="hello"
									profilepic="http://via.placeholder.com/150"
								/>
								<Comment
									createdat="11d"
									username="user3"
									text="nice"
									profilepic="http://via.placeholder.com/150"
								/>
								<Comment
									createdat="4s"
									username="user1442"
									text="gj!"
									profilepic="http://via.placeholder.com/150"
								/>
							</div>
							{/* Likes & Input Section */}
							<div className="border-t border-gray-700 pt-4">
								<div className="flex flex-row space-x-4">
									<div className="hover:text-neutral-500 cursor-pointer">
										<NotificationsLogo />
									</div>
									<div className="hover:text-neutral-500 cursor-pointer">
										<CommentLogo />
									</div>
								</div>
								<p className="text-sm flex ml-auto mb-1">
									1000 likes
								</p>
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
									<button className="text-blue-500 font-medium">
										Post
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProfilePost;

import React, { useState } from "react";

const ProfilePost: React.FC<{ img: string }> = ({ img }) => {
	const [isOpen, setIsOpen] = useState(false);

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
						<div className="flex flex-col flex-1 bg-gray-900 text-white p-4">
							{/* Header */}
							<div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
								<h3 className="font-semibold">meangrammer_</h3>
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
								<div className="flex items-start space-x-3">
									<span className="font-bold">
										meangrammer_
									</span>
									<p>Dummy images from Unsplash</p>
								</div>
								<div className="flex items-start space-x-3">
									<span className="font-bold">strainer</span>
									<p>Nice pic</p>
								</div>
								<div className="flex items-start space-x-3">
									<span className="font-bold">lamin444</span>
									<p>Good clone dude!</p>
								</div>
							</div>

							{/* Likes & Input Section */}
							<div className="border-t border-gray-700 pt-4">
								<p className="text-sm mb-4">1000 likes</p>
								<div className="flex items-center space-x-3">
									<input
										type="text"
										placeholder="Add a comment..."
										className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none"
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

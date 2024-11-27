import React from "react";
import { useNavigate } from "react-router-dom";

const SuggestedHeader: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="mt-2 flex flex-col items-center text-center w-full">
			<div className="flex flex-row items-center justify-between w-full">
				<div className="flex items-center">
					<img
						src="/img1.png"
						alt="bob"
						className="object-cover rounded-full aspect-square w-11 p-1 mx-1"
					/>
					<span className="text-sm font-bold">Bob</span>
				</div>
				<div className="text-sm text-blue-500 cursor-pointer hover:text-blue-900" onClick={() => navigate('/auth')}>
					Logout
				</div>
			</div>
		</div>
	);
};

export default SuggestedHeader;

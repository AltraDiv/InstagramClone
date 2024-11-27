import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers: React.FC = () => {
	return (
		<div>
			<SuggestedHeader />
			<div className="flex flex-col w-full">
				<div className="flex justify-between w-full items-center mb-2">
					<span className="text-gray-700 text-sm">
						Suggested for you
					</span>
					<span className="text-blue-500 text-sm ml-auto hover:cursor-pointer">
						See all
					</span>
				</div>
				<div className="flex flex-col items-center mb-2">
					{/* Each SuggestedUser component will stack vertically */}
					<SuggestedUser
						username="Bob"
						avatar="/img2.png"
						followers={1233}
					/>
					<SuggestedUser
						username="Bob"
						avatar="/img3.png"
						followers={1233}
					/>
				</div>
				<div>
					<span className="flex text-gray-500 text-xs text-center justify-center">
						© 2023 CopyRight by Div
					</span>
				</div>
			</div>
		</div>
	);
};

export default SuggestedUsers;

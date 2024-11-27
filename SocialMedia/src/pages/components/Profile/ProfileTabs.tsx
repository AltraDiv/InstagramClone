import {BsBookmark, BsGrid3X3, BsSuitHeart} from "react-icons/bs";
const ProfileTabs: React.FC = () => {
    return (
		<div className="flex w-full h-10 justify-center items-center gap-12">
			<div className="flex border-t h-full items-center hover:cursor-pointer border-white">
				<BsGrid3X3 />
				<span className="text-center ml-1 bold text-sm">POSTS</span>
			</div>
			<div className="flex items-center h-full hover:cursor-pointer ">
				<BsBookmark />
				<span className="text-center ml-1 text-bold text-sm">
					SAVED
				</span>
			</div>
			<div className="flex items-center h-full hover:cursor-pointer text-sm">
				<BsSuitHeart />
				<span className="text-center ml-1 bold">LIKES</span>
			</div>
		</div>
	);
};

export default ProfileTabs;
import ProfileHeader from "./components/Profile/ProfileHeader";
import ProfileTabs from "./components/Profile/ProfileTabs";
import ProfilePosts from "./components/Profile/ProfilePosts";

const ProfilePage: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen items-center gap-8">
			<div className="w-full max-w-screen-lg px-4 flex flex-col flex-grow">
				{/* Header Section */}
				<div className="w-full flex border-b-2 border-neutral-800">
					<ProfileHeader />
				</div>

				{/* Tabs and Posts Section */}
				<div className="w-full flex flex-col flex-grow">
					<ProfileTabs />
					<div className="flex-grow">
						<ProfilePosts />
					</div>
				</div>
                
			</div>
		</div>
	);
};

export default ProfilePage;

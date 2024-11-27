import { useTheme } from '../../../contexts/ThemeContext';
import DarkToggle from './DarkToggle';
import { Link as RouterLink } from 'react-router-dom';
import { InstagramLogo } from '../../../assets/constants';
import { InstagramMobileLogo } from '../../../assets/constants';
import { SearchLogo } from '../../../assets/constants';
import { MessagesLogo } from '../../../assets/constants';
import { NotificationsLogo } from '../../../assets/constants';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { CreatePostLogo } from '../../../assets/constants';
import { RxAvatar } from 'react-icons/rx';

const SideBar = () => {
	const { isDarkMode, toggleDarkMode } = useTheme();
	const sideBarItems = [
		{
			icon: <AiFillHome />,
			name: "Home",
			link: "/",
		},
		{
			icon: <SearchLogo />,
			name: "Search",
			link: "/search",
		},
		{
			icon: <MessagesLogo />,
			name: "Messages",
			link: "/messages",
		},
		{
			icon: <NotificationsLogo />,
			name: "Notifications",
			link: "/notifications",
		},
		{
			icon: <CreatePostLogo />,
			name: "Create Post",
			link: "/create-post",
		},
		{
			icon: <RxAvatar />, // <img src="/profilepic.png"/>,
			name: "Profile",
			link: "/profile",
		},
	];

	return (
		<div
			className={`sidebar border-r-2 justify-start items-center border-neutral-900 flex flex-col h-screen ${
				isDarkMode ? "dark bg-black" : "bg-white"
			}`}
		>
			{/* Logo with Link to Home */}
			{isDarkMode ? (
				<RouterLink to="/" className="hidden md:block p-4 self-center">
					<InstagramLogo />
				</RouterLink>
			) : (
				<RouterLink
					to="/"
					className="flex h-[7.5%] hidden md:block w-full mb-1 pt-1 flex justify-center items-center"
				>
					<img
						src="/logo.png"
						alt="Logo"
						className="h-full w-full object-contain"
					/>
				</RouterLink>
			)}
			<RouterLink
				to="/"
				className={`md:hidden md:block p-4 self-center ${
					isDarkMode ? "text-white" : "text-black"
				}`}
			>
				<InstagramMobileLogo />
			</RouterLink>

			{/* Navigation List */}
			<ul className="space-y-4 text-center w-full mt-2">
				{sideBarItems.map((item, index) => (
					<div key={index} className="flex justify-center">
						<RouterLink
							to={item.link} // Make sure each link points to the correct route
							className="flex items-center justify-center hover:bg-gray-300 px-4 py-2 rounded"
						>
							{/* Icon and Text side by side */}
							<div
								className={`mr-2 ${
									isDarkMode ? "text-white" : "text-black"
								}`}
							>
								{item.icon}
							</div>
							<span className="hidden md:block">{item.name}</span>
						</RouterLink>
					</div>
				))}
			</ul>

			{/* Dark Mode Toggle */}
			<div className="mt-auto mb-4">
				<RouterLink
					to="/auth"
					className="flex items-center justify-center mb-2 hover:bg-gray-300 px-4 py-2 rounded"
				>
					<div className="mr-2">
						<BiLogOut />
					</div>
					<span className="hidden md:block">Logout</span>
				</RouterLink>
				<DarkToggle
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>
			</div>
		</div>
	);
};

export default SideBar;

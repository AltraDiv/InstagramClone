import FeedPosts from "./components/home/FeedPosts";
import SuggestedUsers from "./components/home/SuggestedUsers";

const Home: React.FC = () => {
  return (
		<div className="flex flex-row min-h-screen justify-center gap-8">
			<div className="container flex w-full md:w-[50%]">
				<FeedPosts />
			</div>
			<div className="hidden lg:block container flex w-[20%] h-1/2">
				<SuggestedUsers />
			</div>
		</div>
  );
};

export default Home;

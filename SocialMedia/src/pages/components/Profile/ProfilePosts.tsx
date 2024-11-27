import ProfilePost from "./ProfilePost";
import {useState, useEffect} from "react";
const ProfilePosts:React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, []);
    return (
		<div className="w-full h-full items-center">
			<div className="grid text-center sm:grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-items-center grid-rows-[20rem]">
				{isLoading &&
					[0, 1, 2, 3, 4, 5].map((_, i) => (
						<div
							key={i}
							className="animate-pulse w-full max-w-[20rem] h-96 flex flex-col justify-center items-center"
						>
							<div className="rounded-lg bg-gray-300 w-full h-80"></div>
						</div>
					))}
				{!isLoading && (
					<>
						<ProfilePost img="/img1.png" />
						<ProfilePost img="/img2.png" />
						<ProfilePost img="/img3.png" />
						<ProfilePost img="/img4.png" />
					</>
				)}
			</div>
		</div>
	);
};

export default ProfilePosts;
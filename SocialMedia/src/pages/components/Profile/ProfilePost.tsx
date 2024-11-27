const ProfilePost:React.FC<{img: string}> = ({img}) => {
    return (
        <div className="h-full hover:opacity-20 w-full cursor-pointer">
            <img src={img} className="h-full w-full object-cover"/>
        </div>
    );
};

export default ProfilePost;
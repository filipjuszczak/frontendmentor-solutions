import Avatar from "./Avatar";

interface ProfileCardProps {
  data: {
    avatar: string;
    fullName: string;
    age: number;
    location: string;
    followersCount: number;
    likesCount: number;
    photosCount: number;
  };
}

const formatCount = (count: number) => {
  return (count / 1000).toString() + "K";
};

export default function ProfileCard({
  data: {
    avatar,
    fullName,
    age,
    location,
    followersCount,
    likesCount,
    photosCount
  }
}: ProfileCardProps) {
  const formattedFollowersCount = formatCount(followersCount);
  const formattedLikesCount = formatCount(likesCount);
  const formattedPhotosCount = formatCount(photosCount);

  return (
    <article className="rounded-xl bg-white bg-[url('/images/bg-pattern-card.svg')] bg-no-repeat text-center">
      <div className="text-darkBlue mb-8 flex flex-col items-center pt-[5.5rem]">
        <Avatar src={avatar} />
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">{fullName}</h1>
          <span className="text-darkGrayishBlue text-lg font-normal">
            {age}
          </span>
        </div>
        <p className="text-darkBlue/70">{location}</p>
      </div>
      <div className="border-darkGrayishBlue/20 text-darkBlue flex justify-around gap-4 border-t-[1px] p-6 text-xs *:w-full">
        <div>
          <h2 className="text-lg font-bold">{formattedFollowersCount}</h2>
          <p className="text-darkGrayishBlue tracking-widest">Followers</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">{formattedLikesCount}</h2>
          <p className="text-darkGrayishBlue tracking-widest">Likes</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">{formattedPhotosCount}</h2>
          <p className="text-darkGrayishBlue tracking-widest">Photos</p>
        </div>
      </div>
    </article>
  );
}

import Avatar from "./Avatar";
import Links from "./Links";

interface ProfileCardProps {
  data: {
    firstName: string;
    lastName: string;
    location: string;
    description: string;
    websites: {
      id: string;
      name: string;
      url: string;
    }[];
    picture: string;
  };
}

export default function ProfileCard({ data }: ProfileCardProps) {
  return (
    <main className="bg-darkGrey flex flex-col items-center gap-6 rounded-xl p-6 text-center text-white">
      <Avatar
        src={data.picture}
        alt={`Picture of ${data.firstName} ${data.lastName}`}
      />
      <div className="space-y-6">
        <div>
          <h1 className="font-semiBold mb-2 text-2xl">
            {data.firstName} {data.lastName}
          </h1>
          <p className="text-green font-semiBold">{data.location}</p>
        </div>
        <p>"{data.description}"</p>
      </div>
      <Links websites={data.websites} />
    </main>
  );
}

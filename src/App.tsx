import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  const [profileData] = useState({
    avatar: "/images/image-victor.jpg",
    fullName: "Victor Crest",
    age: 26,
    location: "London",
    followersCount: 80000,
    likesCount: 803000,
    photosCount: 1400
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="max-w-[min(90%,20rem)] grow shadow-xl">
        <ProfileCard data={profileData} />
      </main>
    </div>
  );
}

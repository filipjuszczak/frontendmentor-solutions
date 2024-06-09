import ProfileCard from "./components/ProfileCard";

const person = {
  firstName: "Jessica",
  lastName: "Randall",
  location: "London, United Kingdom",
  description: "Front-end developer and avid reader.",
  websites: [
    { id: "w1", name: "GitHub", url: "https://github.com" },
    {
      id: "w2",
      name: "Frontend Mentor",
      url: "https://frontendmentor.io/"
    },
    { id: "w3", name: "LinkedIn", url: "https://linkedin.com/" },
    { id: "w4", name: "Twitter", url: "https://x.com" },
    { id: "w5", name: "Instagram", url: "https://instagram.com" }
  ],
  picture: "/images/avatar-jessica.jpeg"
};

export default function App() {
  return (
    <div className="bg-offBlack flex min-h-screen items-center justify-center">
      <div className="max-w-[28rem] grow px-2 lg:p-0">
        <ProfileCard data={person} />
      </div>
    </div>
  );
}

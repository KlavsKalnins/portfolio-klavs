"use client";

import { FC } from "react";

interface ProfileCardProps {
  name: string;
  image: string;
  description: string;
}

const profiles: ProfileCardProps[] = [
  {
    name: "Mārtiņš Kolizs",
    image: "/jam2025/martins.jpg",
    description: "Sound Designer",
  },
  {
    name: "Maigurs",
    image: "/jam2025/maigurs.jpg",
    description: "3D Artist/Animator",
  },
  {
    name: "Artūrs",
    image: "/jam2025/arturs.jpg",
    description: "Backend Developer",
  },
  {
    name: "Katrīna",
    image: "/jam2025/katrina.jpeg",
    description: "Programmer",
  },
  {
    name: "Klāvs",
    image: "/jam2025/klavs.jpg",
    description: "Programmer - Unity",
  },
];

const ProfileCard: FC<ProfileCardProps> = ({ name, image, description }) => {
  return (
    <div className="profile-card gap-2 flex flex-col">
      <div className="w-56 h-56 mx-auto overflow-hidden rounded-full border-4 border-orange-700/60">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="w-56 flex justify-center flex-col">
        <h2 className="text-center max-w-full mx-auto underline text-xl font-bold opacity-80 text-orange-600">
          {name}
        </h2>
        <div className="h-1"></div>
        <p className="text-center max-w-full mx-auto italic text-gray-200 font-bold text-base/5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Jam() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <img
        src="/jam2025/screenshots/0.png" // Replace with the actual image URL
        alt="Background"
        className="w-full h-full object-cover absolute z-0 opacity-40"
      />
      <div className="h-20 flex justify-center items-center z-10">
        <h1 className="text-4xl font-bold text-orange-600 z-10">
          Bubbly Friends
        </h1>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center gap-10 z-10">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>

      <div className="h-20"></div>
      <div className="relative flex justify-center flex-col gap-2">
        <a
          href="/jam2025/bubblyfriends.apk"
          download
          className="hover:text-orange-100 font-bold underline"
        >
          Download Android
        </a>

        <p className="hover:text-orange-100 font-bold underline">
          Send an email with the subject {"'"}Bubbly Friends{"'"} to
          klavskalninss@gmail.com to join the games waitin list
        </p>


        <a
          href="/jam2025/bubblyfriends.apk"
          download
          className="text-white-600 hover:text-orange-100 hover:text-white-500 font-bold underline"
        >
          Cheak my upcomming game Partea on IOS
        </a>
      </div>
    </main>
  );
}

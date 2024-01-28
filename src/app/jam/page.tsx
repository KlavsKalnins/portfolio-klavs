"use client";

import { FC } from "react";

interface ProfileCardProps {
  name: string;
  image: string;
  description: string;
}

const profiles: ProfileCardProps[] = [
  {
    name: 'Oskars',
    image: '/jam/20231222_153104.jpg',
    description: 'Man patīk sņaukt skābi',
  },
  {
    name: 'Maigurs',
    image: '/jam/GGJ_glita_bilde.jpg',
    description: 'Pēc futbola komandas man bērni pietika',
  },
  {
    name: 'Klāvs',
    image: '/jam/klavs.jpeg',
    description: 'Esmu smuks mērkaķis un man patīk kaķi',
  },
];

const ProfileCard: FC<ProfileCardProps> = ({ name, image, description }) => {
  return (
    <div className="profile-card gap-2 flex flex-col">
      <div className="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-red-700/60">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="w-48 flex justify-center flex-col">
        <h2 className="text-center max-w-full mx-auto underline text-xl font-bold opacity-80 text-red-600">{name}</h2>
        <div className="h-1"></div>
        {/* <p className="text-center max-w-full mx-auto italic text-gray-400 text-base/5">{description}</p> */}
      </div>
    </div>
  );
};

export default function Jam() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <div className="h-20 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-red-600">RedStar Colosseum: Iron Legion</h1>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center gap-10">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </main>
  )
}

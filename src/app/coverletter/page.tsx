"use client";
import { useRef, useState } from "react";
// import { COMPANY, JOB_POSITION, ME } from "../../../constante";

/* eslint-disable react/no-unescaped-entities */
export default function CoverLetter() {

    const [COMPANY, setCompany] = useState("");
    const [JOB_POSITION, setJobPosition] = useState("");
    const [ME, setMe] = useState("Klāvs Kalniņš");

    const paragraphRef = useRef<HTMLDivElement>(null);

    const handleCopy = () => {
    if (paragraphRef.current) {
      const text = paragraphRef.current.innerText;
      navigator.clipboard.writeText(text).catch(() => {
        alert("Cover letter copied to clipboard!");
      });
    }
  };

    const coverLetterToHrRef = useRef<HTMLDivElement>(null);

    const handleCopyCoverLetterToHrRef = () => {
    if (coverLetterToHrRef.current) {
      const text = coverLetterToHrRef.current.innerText;
      navigator.clipboard.writeText(text).catch(() => {
        alert("Failed to copy cover letter to clipboard.");
      });
    }
  };

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center p-20">
      <div className="mb-10">
        <button
          onClick={handleCopy}
          className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
        >
          Copy Cover Letter
        </button>

        <button
          onClick={handleCopyCoverLetterToHrRef}
          className="absolute top-10 left-0 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
        >
          Copy Cover Letter TO HR
        </button>
      </div>

      <div className="flex flex-col gap-2 mb-10 w-full max-w-md text-black">
        <input
          type="text"
          placeholder="Company"
          value={COMPANY}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Job Position"
          value={JOB_POSITION}
          onChange={(e) => setJobPosition(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Your Name"
          value={ME}
          onChange={(e) => setMe(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="" ref={paragraphRef}>
        <p>
        To Hr department at {COMPANY},
        <br></br>
        I am writing to express my interest in {JOB_POSITION} at {COMPANY}. It is a great pleasure to apply for this position as I am impressed by {COMPANY}'s reputation and I believe that my skills and experience can be a strong fit for improving {COMPANY}'s growth and success.
<br></br><br></br>
        I have a college degree in Computer Programming as a Programming Technician and have been working as a Software Engineer for the past 7 years. During this time, I have gained extensive experience by coding, testing, architecting, and debugging websites, software, and games. I have worked on a variety of projects, ranging from massive multiplayer games like Zeeverse to large-scale enterprise Logistics and Trucking systems for Priority1, a company in the US. This year in my free time, I have gathered a team of 4 to create a live service game that I'm proud of, and you can find more about it on my LinkedIn.
<br></br><br></br>
        The main reason why I have decided to apply for this position is because I'm moving to Oslo to support my partner, and I am looking for a job that will not only allow me to relocate to Norway, but also to work on-site along with well-minded people who enjoy their craft as well as have continuous growth in professional career.
<br></br><br></br>
        It would be an honor to represent and become an employee at {COMPANY}. I am helpful and supportive of my colleagues, and I always engage with them and the workplace. I often participate in innovation and idea generation as well as contribute to sharing information amongst my group. These qualities have made me truly valuable in my team, and I believe they would be meaningful to {COMPANY}.
<br></br><br></br>
        I appreciate you taking the time to look over my application and documents. Do not hesitate to contact me if there is any further information is needed to be required. I look forward to being in touch with you.
<br></br><br></br>
        Best regards,<br></br>
        Klāvs Kalniņš

        </p>
      </div>

      <p>------------------</p>
      <div className="" ref={coverLetterToHrRef}>
        <p>
          Hi, i was interested in {JOB_POSITION} role. I just sent you my cv through the application form.
          I would be really glad if you gave me some feedback.
        </p>
      </div>
    </main>
  );
}

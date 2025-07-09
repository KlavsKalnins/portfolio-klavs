import { COMPANY, JOB_POSITION, ME } from "../../../constante";

/* eslint-disable react/no-unescaped-entities */
export default function CoverLetter() {
  return (
    <main className="w-screen h-screen flex justify-center items-center p-20">
      <div className="">
        <p>
          To Hr department at {COMPANY},
          <br></br>I am writing to express my interest in{" "}
          {JOB_POSITION} at {COMPANY}. It is a great pleasure to apply for this
          position as I am impressed by {COMPANY}'s reputation and I believe that
          my skills and experience can be a strong fit for improving {COMPANY}'s
          growth and success.
          <br />
          <br />
          I have a college degree in Computer Programming as a Programming
          Technician and have been working as a Software Engineer for the past 7
          years. During this time, I have gained extensive experience in by
          coding, testing, architecting and debugging websites, software, and
          games. I have worked on a variety of projects, ranging from massive
          multiplayer games like Zeeverse to large-scale enterprise Logistics
          and Trucking systems for Priority1 a company in the US.
          <br />
          <br />
          The main reason why I have decided to apply for this position is
          because my partner is moving to Oslo this august and I am looking for
          a job that will not only allow me to relocate to Norway, but also to
          work on-site along with well minded people who enjoy their craft as
          well as has continuous growth in professional career.
          <br />
          <br />
          It would be an honor to represent and become an employee at {COMPANY}.
          I am eager to learn the code base as well as provide meaningful
          contributions to the team. I appreciate you taking the time to look
          over my application and documents. Do not hesitate to contact me if
          there is any further information needed to be required. I look forward
          to being in touch with you.
          <br />
          <br />
          Best regards,
          <br />
          <br />
          {ME}
        </p>
      </div>
    </main>
  );
}

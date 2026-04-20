import Link from "next/link";
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full gap-8">
      <h1 className="text-4xl font-bold ">Kyrgidis Apostolos</h1>
      <p className="w-5xl text-xl text-foreground text-left font-light">
        I am a Fullstack developer focused on building real-world web
        applications using Next.js, TypeScript, and MongoDB. I have developed
        production-ready projects, including a SaaS platform for automated SMS
        notifications and customer management. I enjoy designing responsive,
        user-friendly interfaces while building scalable backend systems.
        Continuously improving my skills, I aim to deliver efficient and
        practical software solutions.
      </p>
      {/* socials */}
      <div className="flex gap-4 items-center">
        {/* CV */}
        <Link href="/cv.pdf" target="_blank">
          <FiFileText className="w-6 h-6 hover:opacity-70 transition" />
        </Link>

        {/* GitHub */}
        <Link href="https://github.com/UnLakhs" target="_blank">
          <FaGithub className="w-6 h-6 hover:opacity-70 transition" />
        </Link>

        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/apostolos-kyrgidis/" target="_blank">
          <FaLinkedin className="w-6 h-6 hover:opacity-70 transition" />
        </Link>
      </div>
    </div>
  );
};
export default Home;

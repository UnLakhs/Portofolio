import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const Home = () => {
  return (
    <section className="w-full max-w-5xl items-center">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-4xl font-bold ">Kyrgidis Apostolos</h1>
        <p className="max-w-5xl text-xl text-foreground text-left font-light">
          I am a Fullstack developer focused on building real-world web
          applications using Next.js, TypeScript, and MongoDB. I have developed
          production-ready projects, including a SaaS platform for automated SMS
          notifications and customer management. I enjoy designing responsive,
          user-friendly interfaces while building scalable backend systems.
          Continuously improving my skills, I aim to deliver efficient and
          practical software solutions.
        </p>
        {/* socials */}
        <div className="flex items-center gap-6">
          {/* CV */}
          <Link
            href="/cv.pdf"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            <FiFileText className="w-5 h-5" />
            <span>CV</span>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/UnLakhs"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/apostolos-kyrgidis/"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
      {/* Next page */}
      <div className="flex mt-10 justify-end">
        <Link className="hover:opacity-70 transition" href="/AboutMe">
          About Me →
        </Link>
      </div>
    </section>
  );
};
export default Home;

const AboutMe = () => {
  return (
    <div className="sm:w-5xl flex flex-col gap-3">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1]">
          About Apostolos
        </h1>
        <p className="sm:w-5xl text-xl text-foreground text-left font-light">
          I’m a full-stack developer working mainly with Next.js, TypeScript,
          Tailwind CSS, and MongoDB. I enjoy building complete applications,
          handling both the frontend and the backend.
        </p>
      </div>

      {/* <div>
        <h2 className="font-medium lg:text-3xl">What I Work With</h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"].map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-foreground/10 px-3 py-1 text-sm text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div> */}

      <div>
        <p className="sm:w-5xl text-xl text-foreground text-left font-light">
          In my projects, I’ve worked on things like authentication, CRUD
          functionality, search, and pagination. I try to keep things simple,
          clean, and practical.
        </p>
      </div>

      <p className="sm:w-5xl text-xl text-foreground text-left font-light">
        Currently, I’m focused on building better projects and getting ready to
        join a team where I can keep improving and gain real-world experience.
      </p>

      <div className="flex my-10 justify-between">
        <a className="hover:opacity-70 transition" href="/">
          ← Introduction
        </a>
        <a className="hover:opacity-70 transition" href="./Projects">
          Projects →
        </a>
      </div>
    </div>
  );
};

export default AboutMe;

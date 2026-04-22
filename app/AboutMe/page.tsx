const AboutMe = () => {
  return (
    <section className="w-full max-w-3xl lg:max-w-5xl space-y-4">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Apostolos
        </h1>
        <p className="max-w-3xl lg:max-w-5xl text-lg font-light leading-8 text-foreground/80">
          I’m a full-stack developer working mainly with Next.js, TypeScript,
          Tailwind CSS, and MongoDB. I enjoy building complete applications,
          handling both the frontend and the backend.
        </p>
      </div>

      <div>
        <p className="max-w-3xl lg:max-w-5xl text-lg font-light leading-8 text-foreground/80">
          In my projects, I’ve worked on things like authentication, CRUD
          functionality, search, and pagination. I try to keep things simple,
          clean, and practical.
        </p>
      </div>

      <p className="max-w-3xl lg:max-w-5xl text-lg font-light leading-8 text-foreground/80">
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
    </section>
  );
};

export default AboutMe;

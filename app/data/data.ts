export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  images: string[];
  featured?: boolean;
  notes?: string;
}

export const projects = [
  {
    title: "Water4You",
    description:
      "A full-stack web application for managing customers and sending automated SMS reminders for water filter replacements.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Twilio API"],
    github: "https://github.com/UnLakhs/water4you-dashboard",
    demo: "",
    images: [
      "/projects/water4you/screenshot-1.png",
      "/projects/water4you/screenshot-2.png",
      "/projects/water4you/screenshot-3.png",
      "/projects/water4you/screenshot-4.png",
    ],
    featured: true,
    notes: ""
  },
  {
    title: "CineGame-Critic",
    description:
      "A full-stack web application for movie and game reviews, allowing users to create accounts, write reviews, add movies/games to their watchlist, and search for content.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/WebDevTeam2/CGC",
    demo: "",
    images: [
      "/projects/cinegame/screenshot_(1).png",
      "/projects/cinegame/screenshot_(2).png",
      "/projects/cinegame/screenshot_(3).png",
      "/projects/cinegame/screenshot_(4).png",
      "/projects/cinegame/screenshot_(5).png",
    ],
    featured: true,
    notes: "This project was built as part of a team, where I contributed to both frontend and backend development. I co-designed all features regarding user authentication and I designed and implemented all Movies features. It was a great experience working collaboratively and applying my full-stack skills to create a functional and user-friendly application."
  },
];

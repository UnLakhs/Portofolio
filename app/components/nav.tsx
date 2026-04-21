"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();

const linkClass = (path: string) => {
  const isActive =
    path === "/"
      ? pathname === "/" // exact match ONLY for home
      : pathname.startsWith(path);

  return `p-2 rounded-md transition duration-200 ${
    isActive ? "bg-gray-300 font-medium" : "hover:bg-gray-300"
  }`;
};  

  return (
    <nav className="sticky top-0 h-screen w-52 overflow-auto py-6 pr-4 no-scrollbar lg:py-8">
      <div className="ml-6 flex flex-col gap-1">
        <h4 className="p-2 text-lg font-semibold">Sections</h4>

        <div className="flex flex-col gap-1 text-lg">
          <Link href="/" className={linkClass("/")}>
            Introduction
          </Link>

          <Link href="/AboutMe" className={linkClass("/AboutMe")}>
            About Me
          </Link>

          <Link href="/Projects" className={linkClass("/Projects")}>
            Projects
          </Link>

          <Link href="/Skills" className={linkClass("/Skills")}>
            Skills & tools
          </Link>

          <Link href="/Experience" className={linkClass("/Experience")}>
            Experience
          </Link>

          <Link href="/Education" className={linkClass("/Education")}>
            Education
          </Link>

          <Link href="/Contact" className={linkClass("/Contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

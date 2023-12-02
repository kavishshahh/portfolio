"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const navItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/blog",
      name: "Blog",
    },
  ];
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="border border-stone-800/90 p-[0.4rem] rounded-sm mb-12 sticky  z-[100] bg-stone-900/80 backdrop-blur-md">
      <nav className="flex gap-2 relative justify-center w-full z-[100]  rounded-lg">
        {navItems.map((item) => {
          const isActive = item.path === pathname;
          return (
            <Link
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full border-b-2 rounded-sm -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    stiffness: 150,
                    damping: 9,
                    duration: 0.2,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

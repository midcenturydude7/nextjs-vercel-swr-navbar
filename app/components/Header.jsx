/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Header() {
  const links = [
    {
      id: Math.random(),
      name: "Docs",
      path: "/docs",
    },
    {
      id: Math.random(),
      name: "Examples",
      path: "/examples",
    },
    {
      id: Math.random(),
      name: "Blog",
      path: "/blog",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="flex h-[70px] w-full items-center justify-between border-b-[1px] border-b-zinc-500 bg-zinc-900 pl-[20%] pr-[20%]">
      <ul>
        <li>
          <Link
            className={cn(
              "relative rounded-md px-4 py-2 font-medium transition-all duration-500 ease-out hover:bg-zinc-300 hover:text-zinc-500",
              pathname === "/"
                ? "cursor-default bg-zinc-300 text-zinc-500 hover:bg-zinc-300"
                : "",
            )}
            href="/"
          >
            Logo
          </Link>
        </li>
      </ul>
      <ul className="flex w-[30%] justify-evenly">
        {links.map(({ id, name, path }) => (
          <li key={id}>
            <Link
              className={cn(
                "relative rounded-md px-4 py-2 font-medium transition-all duration-500 ease-out hover:bg-zinc-300 hover:text-zinc-500",
                pathname === path
                  ? "cursor-default bg-zinc-300 text-zinc-500 hover:bg-zinc-300"
                  : "",
              )}
              href={path}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

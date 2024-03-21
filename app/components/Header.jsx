import Link from "next/link";
import React from "react";

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

export default function Header() {
  return (
    <div className="flex h-14 w-full items-center justify-between border-b-[1px] border-b-zinc-500 bg-zinc-900 pl-[20%] pr-[20%]">
      <ul>
        <li>Logo</li>
      </ul>
      <ul className="flex w-[30%] justify-evenly">
        {links.map(({ id, name, path }) => (
          <li key={id}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";

export default function Header() {
  return (
    <div className="flex h-14 w-full items-center justify-between border-b-[1px] border-b-zinc-500 bg-zinc-900 pl-[20%] pr-[20%]">
      <ul>
        <li>Logo</li>
      </ul>
      <ul className="flex w-[30%] justify-evenly">
        <li className="">Docs</li>
        <li>Examples</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}

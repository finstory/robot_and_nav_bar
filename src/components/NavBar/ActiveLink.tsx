"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <Link
      className={` ${pathName === path && "text-blue-600 underline"}`}
      href={path}
    >
      {text}
    </Link>
  );
};

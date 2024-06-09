"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ActiveLink } from "./ActiveLink";
import css from "./navbar.module.css";

export const NavBar = () => {
  const [open, setOpen] = useState(true);

  const [links, setLinks] = useState<string[]>(["Home", "About", "Contact"]);

  return (
    <nav className={css.nav}>
      <div className={css.hamburger_wrapper}>
        <button className={css.hamburger_btn} onClick={() => setOpen(!open)}>
          H
        </button>
      </div>

      <div className={css.wrapper} style={{ height: open ? "40px" : "100%" }}>
        {!open && (
          <>
            {links.map((link, i) => (
              <Link href="/" key={i} className={css.link}>
                {link}
              </Link>
            ))}
          </>
        )}
      </div>
    </nav>
  );
};

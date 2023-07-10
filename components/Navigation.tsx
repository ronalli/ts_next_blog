"use client";

import { usePathname } from "next/navigation";
import Link  from "next/link";
import {useSession} from 'next-auth/react'

type Navlink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: Navlink[];
};

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();
	const session = useSession();

	console.log(session)

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >{link.label}</Link>
        );
      })}
    </>
  );
}

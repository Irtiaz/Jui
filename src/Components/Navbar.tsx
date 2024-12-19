"use client"

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";
import {usePathname} from "next/navigation";

export function NavigationBar() {
	const pathname = usePathname();
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Jui Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jui</span>
      </NavbarBrand>
			<div className="flex md:order-2">
        <Button>Get Started</Button>
        <Navbar.Toggle />
      </div>
      <NavbarToggle />
      <NavbarCollapse>
				<NavLink href="/" name="Home" pathname={pathname}/>
				<NavLink href="/playground" name="Playground" pathname={pathname}/>
      </NavbarCollapse>
    </Navbar>
  );
}

const NavLink: React.FC<{href: string; name: string; pathname: string}> = ({ href, name, pathname }) => {
	return <NavbarLink as={Link} href={href} active={pathname === href}>{name}</NavbarLink>
}

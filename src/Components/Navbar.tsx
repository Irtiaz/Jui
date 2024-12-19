"use client"

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";
import {usePathname} from "next/navigation";

export function NavigationBar() {
	const pathname = usePathname();
	return (
		<Navbar fluid rounded className="text-black">
			<NavbarBrand as={Link} href="/">
				<img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Jui Logo" />
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jui</span>
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse>
				<NavLink href="/" name="Home" pathname={pathname}/>
				<NavLink href="/examples" name="Examples" pathname={pathname}/>
				<NavLink href="/playground" name="Playground" pathname={pathname}/>
			</NavbarCollapse>
			<div className="flex md:order-2">
				<Link href="/get-started">
					<Button>Get Started</Button>
				</Link>
				<Navbar.Toggle />
			</div>
		</Navbar>
	);
}

const NavLink: React.FC<{href: string; name: string; pathname: string}> = ({ href, name, pathname }) => {
	return <NavbarLink as={Link} href={href} active={pathname === href}>{name}</NavbarLink>
}

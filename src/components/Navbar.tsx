"use client";
import React from "react";
import { useState } from "react";
import logo from "@/assets/logo-small.png";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import MobileNav from "@/components/MobileNavbar";
import { Menu } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "ceLLama",
		href: "./solutions/cellama",
		description:
			"An automated cell type annotation pipeline using local Large Language Models (LLMs).",
	},
];

export function NavigationMenuDemo() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-full max-w-screen-2xl items-center justify-between">
				<Link to="/">
					<img
						src={logo}
						alt="Celvox Logo"
						style={{
							width: "40px",
							height: "40px",
							margin: "10px 0px 10px 10px",
						}}
					/>
				</Link>

				{/* Desktop menu */}
				<nav className="hidden md:flex">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<Link to="/">Home</Link>
									</NavigationMenuLink>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<Link to="/about">About</Link>
									</NavigationMenuLink>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<Link to="/blog">Blog</Link>
									</NavigationMenuLink>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] ">
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<Link to="/contact">Contact</Link>
									</NavigationMenuLink>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</nav>

				{/* Mobile menu button */}

				<button
					onClick={toggleMobileMenu}
					className="md:hidden text-black bg-white p-2 rounded-md hover:bg-black hover:text-white"
				>
					<Menu size={24} />
				</button>
				<MobileNav isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
			</div>
		</header>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

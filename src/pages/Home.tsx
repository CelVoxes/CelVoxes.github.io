("use client");

import { NavigationMenuDemo } from "@/components/Navbar";
import { FlipWordsDemo } from "@/components/FlipWords";
import { SiteFooter } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<>
			<NavigationMenuDemo />
			<FlipWordsDemo />
			<Separator />
			<div className="h-[40rem] flex justify-center items-center px-4">
				<div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					<p>
						Introducing ceLLama, an automated cell type annotation pipeline
						using local Large Language Models (LLMs).
					</p>
					<div className="items-center flex justify-center">
						<Link to="solutions/cellama">
							<Button className="flex justify-center items-center px-16 py-6 mt-4">
								Start here
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<SiteFooter />
		</>
	);
}

export default Home;

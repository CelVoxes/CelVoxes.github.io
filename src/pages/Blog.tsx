import { NavigationMenuDemo } from "@/components/Navbar";
import { SiteFooter } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export function BlogPage() {
	return (
		<>
			<NavigationMenuDemo />
			<div className="h-[40rem] flex justify-center items-center px-4 max-w-xl md:m-auto">
				<div className="text-2xl mx-auto font-normal text-left text-black dark:text-neutral-400">
					<a href="blog/TCC/index.html" className="hover:underline">
						Can Cells Talk?
					</a>
					<div className="mx-auto text-sm text-left text-neutral-600 dark:text-neutral-400">
						July 24, 2024
					</div>
					<br />
					<div className="mx-auto text-base text-left text-neutral-600 dark:text-neutral-400">
						Do cells have a language? With the recent success of large language
						models and the vast number of curated gene pathways, we visited this
						fundamental question one more time.
					</div>
					<br />
					<Separator />
				</div>
			</div>
			<SiteFooter />
		</>
	);
}

export default BlogPage;

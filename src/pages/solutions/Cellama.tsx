import { NavigationMenuDemo } from "@/components/Navbar";
import { CarouselDemo } from "@/components/Carousel";
import { SiteFooter } from "@/components/Footer";
import cellama_logo from "@/assets/cellama.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Cellama() {
	return (
		<>
			<NavigationMenuDemo />

			<div className="h-[40rem] flex justify-center items-center px-4">
				<div className="text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					<blockquote cite="https://pubmed.ncbi.nlm.nih.gov/22186258/">
						"We need merely to assume that changes in the genotype produce
						correlated changes in the adult phenotype, but the mechanism of this
						correlation need not concern us."
						<footer>
							<br />
							C.H. Waddington, <cite>The Epigenotype</cite>, 1942
						</footer>
					</blockquote>
				</div>
			</div>

			<div className="h-[40rem] flex justify-center items-center px-4">
				<div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					After decades of work, we now know how phenotype and genotype are
					connected: <i>Genes</i>. Thousands of genes act together, creating
					networks (or circuits) to define the phenotype of any cell. Recent
					single-cell technologies allow us to analyze these genes and annotate
					each cell individually. High-quality cell type annotation requires
					technical competency and extensive labour. Automated pipelines provide
					simple confidency scores of cell type annotations, but do not provide
					any explanation why cells are annotated as such. Therefore, hard to
					reach techinal expertise is still required.
				</div>
			</div>

			<div className="h-[40rem] flex justify-center items-center px-4">
				<div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					<p className="mb-4">Introducing CeLLama</p>
					<img
						className="border-0"
						src={cellama_logo}
						alt="Cell Journal Logo"
						style={{ height: "250px", width: "250px", borderRadius: "100%" }}
					/>
				</div>
			</div>
			<div className="h-[10rem] flex justify-center items-center px-4">
				<div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					ceLLama is an open-source streamlined automation pipeline for cell
					type annotations using local Large Language Models (LLMs). This
					cutting-edge tool is crafted to streamline and enhance the process of
					cell type identification, making it faster, more comprehensive, and
					more reliable.
					<a
						className="flex justify-center items-center "
						href="https://github.com/Celvoxes/cellama"
					>
						<Button className="flex justify-center items-center px-16 py-6 mt-4">
							Start here
						</Button>
					</a>
				</div>
			</div>

			{/* <div className="h-[30rem] flex justify-center items-center px-4">
				<div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					<small></small>Install with R:
					<br />
					<a href="https://github.com/Celvoxes/cellama">
						<code>install_github("Celvoxes/ceLLama")</code>
					</a>
				</div>
			</div> */}

			<div className="h-[40rem] flex justify-center items-center px-4">
				<CarouselDemo />
			</div>

			{/* CC-Y */}
			<div className="h-[5rem] flex justify-center items-center px-4">
				<div className="mx-auto text-xs text-neutral-600 dark:text-neutral-400">
					Note: This project is licensed under the CC BY-NC 4.0 License,
					allowing use with attribution for non-commercial purposes. For more
					details, visit the{" "}
					<Link to="https://creativecommons.org/licenses/by-nc/4.0/">
						license page
					</Link>
					.
				</div>
			</div>
			<SiteFooter />
		</>
	);
}

export default Cellama;

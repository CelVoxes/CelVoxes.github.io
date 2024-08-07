"use client";

import Marquee from "react-fast-marquee";
import cell from "@/assets/cell.png";
import leukemia from "@/assets/leukemia.jpg";
import ni from "@/assets/ni-logo-sq.png";
import npjpo from "@/assets/npj-po.svg";
import bloodAdvances from "@/assets/blood-journals.webp";

export default function MarqueeBrandsDemo() {
	return (
		<Marquee>
			<a href="https://www.nature.com/articles/s41590-023-01717-5">
				<img
					src={ni}
					alt="Leukemia Journal Logo"
					style={{ height: "30px", marginLeft: "5rem" }}
				/>
			</a>
			<a href="https://www.nature.com/articles/s41698-024-00596-9">
				<img
					src={npjpo}
					alt="Leukemia Journal Logo"
					style={{ height: "28px", marginLeft: "5rem" }}
				/>
			</a>
			<a href="https://www.sciencedirect.com/science/article/pii/S2473952924003823">
				<img
					src={bloodAdvances}
					alt="Blood Logo"
					style={{ height: "100px", marginLeft: "5rem" }}
				/>
			</a>
			<a href="https://www.cell.com/cell/abstract/S0092-8674(23)00796-1?_=">
				<img
					src={cell}
					alt="Cell Journal Logo"
					style={{ height: "100px", marginLeft: "5rem" }}
				/>
			</a>
			<a href="https://www.nature.com/articles/s41375-024-02137-6">
				<img
					src={leukemia}
					alt="Leukemia Journal Logo"
					style={{ height: "100px", marginLeft: "5rem" }}
				/>
			</a>
		</Marquee>
	);
}

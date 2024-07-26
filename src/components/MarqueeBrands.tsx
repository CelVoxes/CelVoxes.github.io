"use client";

import Marquee from "react-fast-marquee";
import cell from "@/assets/cell.png";
import leukemia from "@/assets/leukemia.jpg";
import ni from "@/assets/ni-logo-sq.png";
import npjpo from "@/assets/npj-po.svg";

export default function MarqueeBrandsDemo() {
	return (
		<Marquee>
			<img
				src={ni}
				alt="Leukemia Journal Logo"
				style={{ height: "30px", marginLeft: "5rem" }}
			/>
			<img
				src={npjpo}
				alt="Leukemia Journal Logo"
				style={{ height: "28px", marginLeft: "5rem" }}
			/>
			<img
				src={cell}
				alt="Cell Journal Logo"
				style={{ height: "100px", marginLeft: "5rem" }}
			/>
			<img
				src={leukemia}
				alt="Leukemia Journal Logo"
				style={{ height: "100px", marginLeft: "5rem" }}
			/>
		</Marquee>
	);
}

import { NavigationMenuDemo } from "@/components/Navbar";
import { ContactFormDemo } from "@/components/ContactForm";
import { SiteFooter } from "@/components/Footer";
export function Contact() {
	return (
		<>
			<NavigationMenuDemo />
			<div className="h-[40rem] flex justify-center items-center px-4">
				<div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					<ContactFormDemo />
				</div>
			</div>
			<SiteFooter />
		</>
	);
}

export default Contact;
